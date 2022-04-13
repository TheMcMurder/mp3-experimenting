import React, {useState} from 'react'
import Files from './forms/files.jsx'
import EditFilesMetaDataForm from './forms/edit-files-metadata-form.jsx'
import Card from './atoms/Card.jsx'
import Header from './header/Header.jsx'
import { fileMetadataMachine } from './state-machine.js'
import { useMachine } from '@xstate/react';

export default function EditMetaDataFlow(props) {
  const [state, send] = useMachine(fileMetadataMachine);
  const { files } = state.context
  console.log('files from state machine', files, 'fingers crossed')
  return (
    <div>
      <Header />
      <MainContent>
        <Card>
          <form>
            <Files setFiles={(files) => send('SELECT_FILES', { files })} />
          </form>
          {files.length > 0 && (
            <EditFilesMetaDataForm files={files} />
          )}
        </Card>
      </MainContent>

    </div>
  )
}

function MainContent ({children}) {
  return (
    <div className='w-screen h-screen bg-gray-300 pt-10 flex justify-center items-center m-auto'>
      {children}
    </div>
  )
}

