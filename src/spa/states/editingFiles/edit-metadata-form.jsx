import React from 'react'

export default function EditMetaDataForm({combinedMetadata}) {
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