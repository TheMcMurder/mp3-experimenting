
export function processAndCombineFilesMetadata(files = []) {
  return Promise.all(
    files.filter(file => file && file.path !== undefined).map(file => {
      return window.electronMain.getMetaDataFromFile(file.path)
    })
  ).then(filesMeta => {
    console.log('filesMeta', filesMeta)
    return filesMeta.reduce((acc, curr) => {
      Object.entries(curr).forEach(entry => {
        const [key, value] = entry
        if (key === 'title') {
          return acc
        }
        if (acc[key] === undefined) {
          acc[key] = [value]
        } else if (!acc[key].includes(value)) {
          acc[key].push(value)
        }
      })
      return acc
    }, {})
  })
}

