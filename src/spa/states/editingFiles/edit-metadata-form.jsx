import React from 'react'
import { usePartMetadataState } from '../../helpers/useGlobalContext.jsx'
import Form, { SectionTitle, SectionContents, Section, Field, TextInput} from '../../forms/Form.jsx'

export default function EditMetaDataForm(props) {
  const combinedMetadata = usePartMetadataState(combinedMetadataAccessor)
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

function handleSubmit (values) {
  // console.log('args', arguments)
  console.log('submit', values)
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