import React, {useEffect} from 'react'
import EditMetaDataForm from './forms/edit-metadata-form.jsx'

export default function Root () {
  return (
    <div className='italic'>
      yolo
      <span className='text-red-500'>Red</span>
      <EditMetaDataForm />

    </div>
  )
}