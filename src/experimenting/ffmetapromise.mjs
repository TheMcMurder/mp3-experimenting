import ffmetadata from 'ffmetadata'

export function readMetadata(filePath) {
  return new Promise((res, rej) => {
    ffmetadata.read(filePath, function (err, data) {
      if (err) {
        rej(err)
      }
      res(data)
    });
  })
}

export function writeMetadata(filePath, metadata) {
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

export function writeMetadataFromOldMetadata(filePath, metadataPredicateFn) {
  return readMetadata(filePath).then((metadata) => {
    return metadataPredicateFn(metadata)
  }).then((newMetadata) => writeMetadata(filePath, newMetadata))
}