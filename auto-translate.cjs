const fs = require("fs");
const path = require("path");

async function run() {
  // Use dynamic import since google-translate-api-x is an ESM module usually
  const { translate } = await import("google-translate-api-x");

  const localesDir = path.join(__dirname, "src/i18n/locales");
  const enPath = path.join(localesDir, "en.json");
  const enObj = JSON.parse(fs.readFileSync(enPath, "utf8"));

  const targets = ["ar", "fr", "de", "it", "ru", "es"];

  // Helper to traverse and collect all strings
  const stringsToTranslate = [];
  const paths = [];

  function traverse(obj, currentPath = []) {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        stringsToTranslate.push(obj[key]);
        paths.push([...currentPath, key]);
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item, index) => {
            if (typeof item === "string") {
              stringsToTranslate.push(item);
              paths.push([...currentPath, key, index]);
            } else if (typeof item === "object") {
              traverse(item, [...currentPath, key, index]);
            }
          });
        } else {
          traverse(obj[key], [...currentPath, key]);
        }
      }
    }
  }

  traverse(enObj);

  console.log(`Found ${stringsToTranslate.length} strings to translate.`);

  // Function to set value at path
  function setValue(obj, pathArr, value) {
    let current = obj;
    for (let i = 0; i < pathArr.length - 1; i++) {
      const p = pathArr[i];
      if (!current[p]) {
        current[p] = typeof pathArr[i + 1] === "number" ? [] : {};
      }
      current = current[p];
    }
    current[pathArr[pathArr.length - 1]] = value;
  }

  // Batch translate
  const BATCH_SIZE = 50;

  for (const target of targets) {
    console.log(`Translating to ${target}...`);
    const translatedObj = Array.isArray(enObj) ? [] : {};

    for (let i = 0; i < stringsToTranslate.length; i += BATCH_SIZE) {
      const batchStrings = stringsToTranslate.slice(i, i + BATCH_SIZE);
      const batchPaths = paths.slice(i, i + BATCH_SIZE);

      try {
        const res = await translate(batchStrings, { to: target, autoCorrect: false });
        // res is an array of objects when input is an array
        res.forEach((r, idx) => {
          setValue(translatedObj, batchPaths[idx], r.text);
        });
        process.stdout.write(".");
      } catch (e) {
        console.error(`Error translating batch to ${target}:`, e.message);
        // Fallback to original text
        batchStrings.forEach((str, idx) => {
          setValue(translatedObj, batchPaths[idx], str);
        });
      }
    }
    console.log(`\nCompleted ${target}. Saving...`);
    fs.writeFileSync(
      path.join(localesDir, `${target}.json`),
      JSON.stringify(translatedObj, null, 2),
    );
  }

  console.log("All translations completed.");
}

run().catch(console.error);
