import { createMachine, assign } from 'xstate'
import { processAndCombineFilesMetadata } from './helpers/processFilesMetadata'
import { promiseWithMinTimeWait } from './helpers/promiseWithMinTimeWait'
import { writeMetadataToFiles } from './helpers/writeMetadataToFiles'

export const fileMetadataMachine = createMachine(
  {
    id: 'application-flow',
    initial: 'welcome',
    context: {
      files: [],
      fileMeta: {},
      finalMetadata: {},
    },
    states: {
      welcome: {
        on: {
          SELECT_FILES: {
            actions: ['selectFiles'],
            target: 'editingFiles'
          }
        }
      },
      editingFiles: {
        initial: 'processingFiles',
        states: {
          processingFiles: {
            invoke: {
              id: 'getCombinedMetadataForFiles',
              src: (context, event) => combineFilesMetadata(context.files),
              onDone: {
                target: 'editing',
                actions: assign({ fileMeta: (context, event) => {
                  return event.data
                }})
              },
              onError: {
                target: 'errorProcessing'
              }
            },
          },
          editing: {
            on: {
              WRITE_METADATA: {
                actions: ['writeMetadata'],
                target: 'writingMetadata'
              }
            }
          },
          writingMetadata: {
            invoke: {
              id: 'writeMetadataFromSelectedContext',
              src: (context, event) => writeMetadata(context.files, context.finalMetadata),
              onDone: {
                target: '#finished'
              }
            }
          },
          errorProcessing: {

          }
        }
      },
      finished: {
        id: 'finished'

      }
    },
  },
  {
    actions: {
      selectFiles: assign((context, event) => {
        return {
          files: event.files
        }
      }),
      writeMetadata: assign((context, event) => {
        console.log('event', event)
        return {
          finalMetadata: event.metadata
        }
      })
    },
  }
)

function combineFilesMetadata (files) {
  console.log('!!files', files)
  return promiseWithMinTimeWait(processAndCombineFilesMetadata(files))
}

function writeMetadata (files, finalMetadata) {
  console.log('!!!files', files)
  console.log('!!!finalMetadata', finalMetadata)
  return promiseWithMinTimeWait(writeMetadataToFiles(files, finalMetadata))
}