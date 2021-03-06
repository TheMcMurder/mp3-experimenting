import React, { useEffect, useReducer, useState } from 'react'
import { isOnState } from '../../helpers/useGlobalContext.jsx'
import EditMetadataForm from './edit-metadata-form.jsx'

export default function EditingFiles (props) {
  const isProcessingFiles = isOnState('editingFiles.processingFiles')
  const isEditingFiles = isOnState('editingFiles.editing')
  const isWritingMetadata = isOnState('editingFiles.writingMetadata')
  return (
    <div>
      {
        isProcessingFiles && (
          <div>
            loading...
          </div>
        )
      }
      {
        isEditingFiles && (
          <EditMetadataForm />
        )
      }
      {
        isWritingMetadata && (
          <div>
            writing metadata...
          </div>
        )
      }
    </div>
  )
}