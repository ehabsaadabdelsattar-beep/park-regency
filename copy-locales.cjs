const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "src/i18n/locales");
const enPath = path.join(localesDir, "en.json");

const locales = ["ar.json", "fr.json", "de.json", "it.json", "ru.json", "es.json"];

const enContent = fs.readFileSync(enPath, "utf8");

locales.forEach((locale) => {
  fs.writeFileSync(path.join(localesDir, locale), enContent);
  console.log(`Copied en.json to ${locale}`);
});

console.log("All locales updated successfully.");
