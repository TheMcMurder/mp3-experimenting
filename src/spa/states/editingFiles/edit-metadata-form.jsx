import React from 'react'
import { usePartMetadataState } from '../../helpers/useGlobalContext.jsx'

export default function EditMetaDataForm(props) {
  const combinedMetadata = usePartMetadataState(combinedMetadataAccessor)
  console.log('combinedMetadata', combinedMetadata)
  return (
    <div>
      <form>
        <section>
          Metadata for All files
          {
            Object.entries(combinedMetadata).map((key, value) => {
              return (
                <div>
                  {key} : {value}
                </div>
              )
            })
          }
        </section>
      </form>
    </div>
  )
}

function combinedMetadataAccessor (state) {
  return state.context.fileMeta
}