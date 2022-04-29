import React from 'react'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { useFileMetadataServiceSend } from '../../helpers/useGlobalContext.jsx' 
import Button from '../../atoms/Button.jsx'

export default function Finished() {
  const sendToStateMachine = useFileMetadataServiceSend()
  return (
    <div className='w-auto'>
      <div className='w-full flex justify-between'>
        <div>
          <EmojiHappyIcon className='h-20 w-20 text-green-500'/>
        </div>
        <div className='px-4'>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Success</span>
            <span className="block text-xl font-medium">File metadata written successfully</span>
          </h2>
        </div>
      </div>
      <div className='pt-5 flex justify-end'>
        <Button onClick={() => sendToStateMachine({type: 'START_OVER'})}>Start Over</Button>
      </div>
    </div>
  )
}