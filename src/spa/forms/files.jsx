import React from 'react'

export default function Files ({setFiles}) {
  return (
    <div className='block px-4 bg-red:100'>
      <input type='file' multiple onChange={(e) => {
        const files = [...e.target.files]
        setFiles(files)
      }}></input>
    </div>
  )
}