import React, {useState} from 'react'
import Files from './files.jsx'
import EditFilesMetaDataForm from './edit-files-metadata-form.jsx'
import Card from '../atoms/Card.jsx'
import Header from '../header/Header.jsx'

export default function EditMetaDataFlow(props) {
  const [files, setFiles] = useState([])
  return (
    <div>
      <Header />
      <MainContent>
        <Card>
          <form>
            <Files setFiles={setFiles} />
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