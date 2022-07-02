import React from 'react'
import Files from './forms/files.jsx'
import EditingFiles from './states/editingFiles/editing-files.jsx'
import Header from './header/Header.jsx'
import Finished from './states/Finished/Finished.jsx'
import Button from './atoms/Button.jsx'
import { useMetadataState } from './helpers/useGlobalContext.jsx'

export default function EditMetadataFlow(props) {
  const [ state, send ] = useMetadataState()
  return (
    <div className='bg-gray-200 h-screen w-full'>
      <Header />
      <MainContent>
        {
          state.matches('welcome') && (
            <>
              <Files setFiles={(files) => send({type: 'SELECT_FILES', files })} />
            </>
          )
        }
        {
          state.matches('editingFiles') && (
            <EditingFiles />
          )
        }
        {
          state.matches('finished') && (
            <Finished />
          )
        }
      </MainContent>

    </div>
  )
}

function MainContent({ children }) {
  return (
    <div className='bg-gray-200 flex justify-center items-center m-auto flex-1 '>
      <main className="">
        <div className="max-w-7xl mx-auto p-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

