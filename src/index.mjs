import path from 'path'
import { readMetaData, writeMetaData } from './ffmetapromise.mjs'

const testFile = path.resolve('../../../Downloads/The Beekeepers Lament/The Beekeeper_s Lament-Part03.mp3')
// console.log('*******************')
// console.log('*******************')
// console.log('*******************')
// console.log('process.cwd', process.cwd())
// // const testFile = path.relative(process.cwd(), path.resolve('~', '/Downloads/The Beekeepers Lament test - 1/The Beekeeper_s Lament-Part01.mp3'))
// // const testFile = path.relative(process.cwd(), './Downloads/The Beekeepers Lament test - 1/The Beekeeper_s Lament-Part01.mp3')
// console.log('testFile', testFile)
// console.log('*******************')
// console.log('*******************'3
// console.log('*******************')

// readFile(testFile).then((results) => {
//   console.log('results', results)
// })


const audioBookGenre = 183
const newMetaData = getNewMetaData()

writeMetaData(testFile, newMetaData).then((res) => {
  console.log('yay')
}).then(() => readMetaData(testFile)).then(response => {
  console.log('response', response)
})

function getNewMetaData() {
  return {
    album: "The Beekeeper's Lament",
    genre: audioBookGenre,
  }
  
}