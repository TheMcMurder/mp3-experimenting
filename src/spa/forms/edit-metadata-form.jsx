import React, {useState} from 'react'
import Files from './files.jsx'
import EditFilesMetaDataForm from './edit-files-metadata-form.jsx'

export default function EditMetaDataFlow(props) {
  const [files, setFiles] = useState([])
  return (
    <div>
      <form>
        <Files setFiles={setFiles} />
      </form>
      {files.length > 0 && (
        <EditFilesMetaDataForm files={files} />
      )}
    </div>
  )
}