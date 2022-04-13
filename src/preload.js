const { contextBridge } = require('electron')
const { readMetaData } = require('./ffmetapromise')

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
  }
)

//path: "/Users/justinmcmurdie/Downloads/The Beekeepers Lament/The Beekeeper_s Lament-Part01.mp3"
