import React, { useEffect, useReducer, useState } from 'react'
import SingleFile from './single-file.jsx'

export default function EditMetaDataForm(props) {
  const { files } = props
  const metadata = useCombineFileMetadata(files)
  return (
    <div>
      <div>
        All Files
      </div>
      {
        files.map((file) => <SingleFile key={file.name} file={file} />)
      }
      YAY you have files
    </div>
  )
}

function useCombineFileMetadata(files = []) {
  const [combinedState, setCombinedState ] = useState({})
  useEffect(() => {
    if (files.length > 0) {
      Promise.all(
        files.map(file => window.electronMain.getMetaDataFromFile(file.path))
      ).then(filesMeta => {
        return filesMeta.reduce((acc, curr) => {
          Object.entries(curr).forEach(entry => {
            const [key, value] = entry
            if (key === 'title') {
              return acc
            }
            if (acc[key] === undefined) {
              acc[key] = [value]
            } else if (!acc[key].includes(value)){
              acc[key].push(value)
            }
          })

          return acc
        }, {})
      }).then((combinedValue) => {
        setCombinedState(combinedValue)
      })
    }
  }, [JSON.stringify(files)])
  return combinedState
}