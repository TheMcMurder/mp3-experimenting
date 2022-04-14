import React from 'react'
const defaultOptions = [ 'default1', 'default2', 'default3']
export default function Listbox(props) {
  const { label, defaultValue, options = defaultOptions } = props
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="label"
        name={label}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={defaultValue || options[0]}
      >
        {
          options.map((option) => {
            return (
              <option key={option}>{option}</option>
            )
          })
        }
      </select>
    </div>
  )
}