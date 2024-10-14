const fs = require("fs");
const path = require("path");

// Read the JSON data from the file
const filePath = path.join(__dirname, "index.json");
const rawData = fs.readFileSync(filePath, "utf-8");
const jsonData = JSON.parse(rawData);

// Create an array of all the translation keys
const translationKeys = Object.keys(jsonData.uz);

// Prepare the CSV header
const header = ["key", "uz", "ru", "kr"];

// Prepare CSV rows
const rows = translationKeys.map((key) => {
  return [
    key,
    jsonData.uz[key] || "",
    jsonData.ru[key] || "",
    jsonData.kr[key] || "",
  ].join(",");
});

// Combine header and rows
const csvContent = [header.join(","), ...rows].join("\n");

// Write the CSV content to a file
fs.writeFileSync("translations.csv", csvContent);

console.log("CSV file has been created!");
