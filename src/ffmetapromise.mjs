import ffmetadata from 'ffmetadata'

export function readMetaData(filePath) {
  return new Promise((res, rej) => {
    ffmetadata.read(filePath, function (err, data) {
      if (err) {
        rej(err)
      }
      res(data)
    });
  })
}

export function writeMetaData(filePath, metadata) {
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

export function writeMetaDataFromOldMetaData(filePath, metadataPredicateFn) {
  return readMetaData(filePath).then((metadata) => {
    return metadataPredicateFn(metadata)
  }).then((newMetaData) => writeMetaData(filePath, newMetaData))
}