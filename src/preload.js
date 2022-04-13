const { contextBridge } = require('electron')
const { readMetaData } = require('./ffmetapromise')

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

contextBridge.exposeInMainWorld(
  'electronMain',
  {
    getMetaDataFromFile: (file) => {
      return readMetaData(file)
    },
  }
)

//path: "/Users/justinmcmurdie/Downloads/The Beekeepers Lament/The Beekeeper_s Lament-Part01.mp3"
