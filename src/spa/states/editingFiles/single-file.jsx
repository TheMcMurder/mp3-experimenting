import React, { useEffect, useReducer, useState } from 'react'

export default function SingleFile(props) {
  const { file } = props
  console.log('file', file)
  return (
    <div>
      Single File
      <div>
        {file.name}
      </div>
    </div>
  )
}