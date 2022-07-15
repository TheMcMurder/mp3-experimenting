import React from 'react'
import { usePartMetadataState, useFileMetadataServiceSend } from '../../helpers/useGlobalContext.jsx'
import Button from '../../atoms/Button.jsx'
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
            <Button
              styleType='secondary'
              type='button'
              onClick={() => {
                sendToStateMachine({ type: 'CANCEL'})
              }}
            >
              Cancel
            </Button>
            <Button
              styleType='primary'
              type='submit'
            >
              Submit
            </Button>
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