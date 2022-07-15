import React from 'react'

const styleTypes = {
  primary: 'ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  secondary: 'bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  raw: '',
}

export default function Button ({children, className, type, styleType = 'primary', ...other}) {
  return (
    <button
      type={type || "button"}
      className={`${styleTypes[styleType]} ${className}`}
      {...other}
    >
      {children}
    </button>
  )
}