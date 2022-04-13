const ffmetadata = require('ffmetadata')

function readMetaData(filePath) {
  console.log('filepath', filePath)
  return new Promise((res, rej) => {
    ffmetadata.read(filePath, function (err, data) {
      if (err) {
        rej(err)
      }
      res(data)
    });
  })
}

function writeMetaData(filePath, metadata) {
  return new Promise((res, rej) => {
    ffmetadata.write(filePath, metadata, function(err) {
      if (err) {
        rej("Error writing metadata", err);
      } else {
        res(undefined)
      }
    });
  })
}

module.exports = {
  readMetaData,
  writeMetaData
}