const path = require("path");
const fs = require("fs");

const utils = (function () {
  function getFilePath(filePath) {
    return path.join(__dirname, filePath);
  }

  function getJsonFromFile(filePath) {
    const localFilePath = getFilePath(filePath);
    const jsonContent = fs.readFileSync(localFilePath);
    return JSON.parse(jsonContent);
  }

  return {
    getFilePath,
    getJsonFromFile,
  };
})();

module.exports = utils;
