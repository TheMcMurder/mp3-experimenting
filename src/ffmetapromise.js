const ffmetadata = require('ffmetadata')
const ffmpeg = require('ffmpeg-static-electron')
ffmetadata.setFfmpegPath(ffmpeg.path)

function readMetadata(filePath) {
  return new Promise((res, rej) => {
    ffmetadata.read(filePath, function (err, data) {
      if (err) {
        rej(err)
      }
      res(data)
    });
  })
}

function writeMetadata(filePath, metadata) {
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
  readMetadata,
  writeMetadata
}