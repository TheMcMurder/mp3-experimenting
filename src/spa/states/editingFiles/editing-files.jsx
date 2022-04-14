import React, { useEffect, useReducer, useState } from 'react'
import EditMetaDataForm from './edit-metadata-form.jsx'
import SingleFile from './single-file.jsx'

export default function EditingFiles (props) {
  const { files, send, state } = props
  console.log('render', state && state.context)
  return (
    <div>
      {
        state.matches('editingFiles.processingFiles') && (
          <div>
            loading...
          </div>
        )
      }
      {
        state.matches('editingFiles.editing') && (
          <EditMetaDataForm combinedMetadata={state.context.fileMeta}/>
        )
      }
    </div>
  )
}