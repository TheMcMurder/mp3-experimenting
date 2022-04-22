import React, { useEffect, useReducer, useState } from 'react'

export default function SingleFile(props) {
  const { file } = props
  return (
    <div>
      Single File
      <div>
        {file.name}
      </div>
    </div>
  )
}