import React, {useEffect} from 'react'
import EditMetaDataFlow from './forms/edit-metadata-flow.jsx'

export default function Root () {
  console.log('window.debugInfo', window.debugInfo)
  return (
    <div className='relative'>
      <EditMetaDataFlow />
    </div>
  )
}