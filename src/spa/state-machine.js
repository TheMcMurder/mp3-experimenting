import { createMachine, assign } from 'xstate'

export const fileMetadataMachine = createMachine(
  {
    id: 'application-flow',
    initial: 'welcome',
    context: {
      files: [],
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
            on: {
              FILES_PROCESSED: 'editing'
            }
          },
          editing: {
          }
        }
      }
    },
  },
  {
    actions: {
      selectFiles: assign((context, event) => {
        console.log('context', context)
        console.log('event', event)
        return {
          files: event.files
        }
      })
    }
  }
)
