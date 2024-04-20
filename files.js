const fs = require("fs");
const path = require("path");

function listFilenames(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(`Unable to read the directory: ${err}`);
        return;
      }

      let filenames = files
        .map((file) => path.join(directoryPath, file))
        .filter((file) => fs.statSync(file).isFile());
      filenames = filenames.map((file) => path.basename(file));

      resolve(filenames);
    });
  });
}

module.exports = { listFilenames };
