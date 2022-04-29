import React from 'react'

export default function Button ({children, className, type, ...other}) {
  return (
    <button
      type={type || "button"}
      className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      {...other}
    >
      {children}
    </button>
  )
}