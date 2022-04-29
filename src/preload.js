const { contextBridge } = require('electron')
const { readMetaData, writeMetaData } = require('./ffmetapromise')

contextBridge.exposeInMainWorld(
  'debugInfo',
  {
    node: process.versions['node'],
    chrome: process.versions['chrome'],
    electron: process.versions['electron'],
  }
)

contextBridge.exposeInMainWorld(
  'electronMain',
  {
    getMetaDataFromFile: (file) => {
      return readMetaData(file)
    },
    writeMetaData: (file, metadata) => {
      console.log('writeMetaData', writeMetaData)
      return writeMetaData(file, metadata)
    }
  }
)

//path: "/Users/justinmcmurdie/Downloads/The Beekeepers Lament/The Beekeeper_s Lament-Part01.mp3"
