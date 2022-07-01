const { contextBridge } = require('electron')
const { readMetadata, writeMetadata } = require('./ffmetapromise')

contextBridge.exposeInMainWorld(
  'debugInfo',
  {
    node: process.versions['node'],
    chrome: process.versions['chrome'],
    electron: process.versions['electron'],
    applicationVersion: process.env.npm_package_version,
  }
)

contextBridge.exposeInMainWorld(
  'electronMain',
  {
    getMetadataFromFile: (file) => {
      return readMetadata(file)
    },
    writeMetadata: (file, metadata) => {
      console.log('writeMetadata', writeMetadata)
      return writeMetadata(file, metadata)
    }
  }
)

//path: "/Users/justinmcmurdie/Downloads/The Beekeepers Lament/The Beekeeper_s Lament-Part01.mp3"
