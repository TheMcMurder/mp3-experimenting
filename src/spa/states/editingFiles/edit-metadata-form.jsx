import React from 'react'
import { usePartMetadataState, useFileMetadataServiceSend } from '../../helpers/useGlobalContext.jsx'
import Form, { SectionTitle, SectionContents, Section, Field, TextInput, PhotoInput} from '../../forms/Form.jsx'

export default function EditMetadataForm() {
  const combinedMetadata = usePartMetadataState(combinedMetadataAccessor)
  const sendToStateMachine = useFileMetadataServiceSend()
  const handleSubmit = (values) => {
    console.log('submit', values)
    const metadata = {
      album: values['book-title'],
      artist: values.author,
      comment: values.summary,
      genre: 183,
    }
    sendToStateMachine({ type: 'WRITE_METADATA', metadata })
  }
  console.log('combinedMetadata', combinedMetadata)
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle title="Metadata for all files" explainer="Use these fields to edit metadata for files. This is different than editing the files in iTunes because this will actually save the metadata on the files"/>
          <SectionContents>
            <Field
              name='book-title'
              label='Book Title'
              initialValue={getFirstCombinedValue(combinedMetadata.album)}
            >
              <TextInput />
            </Field>
            <Field
              name='author'
              label='Author'
              initialValue={getFirstCombinedValue(combinedMetadata.artist)}
            >
              <TextInput />
            </Field>
            <Field
              name='summary'
              label='Book Summary'
              initialValue={getFirstCombinedValue(combinedMetadata.comment)}
            >
              <TextInput />
            </Field>
            {/* <Field
              name='book-cover'
              label='Book Cover'
              // initialValue={getFirstCombinedValue(combinedMetadata.comment)}
            >
              <PhotoInput />
            </Field> */}
          </SectionContents>
        </Section>
        <Section>
          <div className='pt-5 flex justify-end'>
            <button
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type='submit'
            >
              Submit
            </button>
          </div>
        </Section>
      </Form>
    </div>
  )
}

function getFirstCombinedValue (arrayOfValues = []) {
  if (arrayOfValues.length === 0) {
    return ''
  } else {
    return arrayOfValues[0]
  }

}

function combinedMetadataAccessor (state) {
  return state.context.fileMeta
}