
export function writeMetadataToFiles(files = [], fileMetadata) {
  return Promise.all(
    files.map(file => window.electronMain.writeMetadata(file.path, fileMetadata))
  )
}

