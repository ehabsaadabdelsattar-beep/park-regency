const fs = require("fs");
const path = require("path");

async function run() {
  const { translate } = await import("google-translate-api-x");

  const localesDir = path.join(__dirname, "src/i18n/locales");
  const enPath = path.join(localesDir, "en.json");
  const enObj = JSON.parse(fs.readFileSync(enPath, "utf8"));

  const targets = ["ar", "fr", "de", "it", "ru", "es"];

  // Helper to traverse and collect all leaf nodes (path and string value)
  function getLeafNodes(obj, currentPath = [], result = []) {
    if (typeof obj === "string") {
      result.push({ path: currentPath, val: obj });
    } else if (typeof obj === "object" && obj !== null) {
      for (const key in obj) {
        const nextKey = Array.isArray(obj) ? parseInt(key, 10) : key;
        getLeafNodes(obj[key], [...currentPath, nextKey], result);
      }
    }
    return result;
  }

  // Helper to check if a path exists in target object
  function getValueAtPath(obj, pathArr) {
    let current = obj;
    for (const key of pathArr) {
      if (current === undefined || current === null || !(key in current)) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  }

  // Helper to set value at path
  function setValue(obj, pathArr, value) {
    let current = obj;
    for (let i = 0; i < pathArr.length - 1; i++) {
      const p = pathArr[i];
      if (current[p] === undefined || current[p] === null) {
        current[p] = typeof pathArr[i + 1] === "number" ? [] : {};
      }
      current = current[p];
    }
    current[pathArr[pathArr.length - 1]] = value;
  }

  const allEnLeafs = getLeafNodes(enObj);

  const BATCH_SIZE = 15;

  for (const target of targets) {
    const targetPath = path.join(localesDir, `${target}.json`);
    if (!fs.existsSync(targetPath)) continue;

    const targetObj = JSON.parse(fs.readFileSync(targetPath, "utf8"));

    // Find leaf nodes that are in dining, facilities, or diveCenter, and whose target value is equal to their English value
    const untranslatedLeafs = allEnLeafs.filter((leaf) => {
      const parentSection = leaf.path[0];
      if (
        parentSection !== "dining" &&
        parentSection !== "facilities" &&
        parentSection !== "diveCenter"
      ) {
        return false;
      }
      const targetVal = getValueAtPath(targetObj, leaf.path);
      return targetVal === leaf.val;
    });

    console.log(
      `\nFound ${untranslatedLeafs.length} untranslated English values in ${target}. Translating...`,
    );

    if (untranslatedLeafs.length === 0) {
      continue;
    }

    for (let i = 0; i < untranslatedLeafs.length; i += BATCH_SIZE) {
      const batch = untranslatedLeafs.slice(i, i + BATCH_SIZE);
      const batchStrings = batch.map((l) => l.val);

      try {
        console.log(
          `Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(untranslatedLeafs.length / BATCH_SIZE)}...`,
        );
        const res = await translate(batchStrings, {
          to: target,
          autoCorrect: false,
          rejectOnPartialFail: false,
        });

        batch.forEach((leaf, idx) => {
          const transText = res && res[idx] && res[idx].text ? res[idx].text : leaf.val;
          setValue(targetObj, leaf.path, transText);
        });
      } catch (e) {
        console.error(`Error translating batch to ${target}:`, e.message);
      }
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    console.log(`Saving updated ${target}.json...`);
    fs.writeFileSync(targetPath, JSON.stringify(targetObj, null, 2));
  }

  console.log("\nAll English remnants translated successfully!");
}

run().catch(console.error);
