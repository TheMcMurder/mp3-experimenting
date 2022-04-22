import React, {useState, useEffect} from 'react'
import Files from './forms/files.jsx'
import EditingFiles from './states/editingFiles/editing-files.jsx'
import Card from './atoms/Card.jsx'
import Header from './header/Header.jsx'
import Listbox from './forms/Listbox.jsx'
import { useMetadataState } from './helpers/useGlobalContext.jsx'

export default function EditMetaDataFlow(props) {
  const [ state, send ] = useMetadataState()
  return (
    <div>
      <Header />
      <MainContent>
        {
          state.matches('welcome') && (
            <Files setFiles={(files) => send({type: 'SELECT_FILES', files })} />
          )
        }
        {
          state.matches('editingFiles') && (
            <EditingFiles />
          )
        }
      </MainContent>

    </div>
  )
}

function MainContent({ children }) {
  return (
    <div className='w-screen h-screen bg-gray-200 pt-10 flex justify-center items-center m-auto'>
      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

