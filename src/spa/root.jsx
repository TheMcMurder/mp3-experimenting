import React, {useEffect} from 'react'
import EditMetadataFlow from './edit-metadata-flow.jsx'
import { GlobalStateProvider } from './globalStateContext.jsx'

export default function Root () {
  console.log('window.debugInfo', window.debugInfo)
  return (
    <div className='relative'>
      <GlobalStateProvider>
        <EditMetadataFlow />
      </GlobalStateProvider>
    </div>
  )
}