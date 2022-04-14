import { createMachine, assign } from 'xstate'
import { processAndCombineFilesMetadata } from './helpers/processFilesMetadata'
import { promiseWithMinTimeWait } from './helpers/promiseWithMinTimeWait'

export const fileMetadataMachine = createMachine(
  {
    id: 'application-flow',
    initial: 'welcome',
    context: {
      files: [],
      fileMeta: {}
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
              id: 'getCombinedMetaDataForFiles',
              src: (context, event) => combineFilesMetaData(context.files),
              onDone: {
                target: 'editing',
                actions: assign({ fileMeta: (context, event) => {
                  console.log('event', event)
                  return event.data
                }})
              },
              onError: {
                target: 'errorProcessing'
              }
            },
          },
          editing: {
          },
          errorProcessing: {

          }
        }
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
      processFiles: assign((context, event) => {
        console.log('context', context)
        return {
          fileMeta: {}
        }
      })
    },
  }
)

function combineFilesMetaData (files) {
  console.log('!!files', files)
  return promiseWithMinTimeWait(processAndCombineFilesMetadata(files))
}