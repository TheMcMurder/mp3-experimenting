import React from 'react'

export default function Card (props) {
  const { children, className } = props
  return (
    <div className={`bg-white p-4 shadow-md ${className}`}>
      {children}
    </div>
  )
}