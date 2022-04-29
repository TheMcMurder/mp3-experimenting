import React from 'react'
import { Form as FinalForm, Field as FinalField } from 'react-final-form'

export default function Form({ children, onSubmit, validate }) {
  const sections = React.Children.map(children, child => {
    if (child.type === Section) {
      return child
    }
  })
  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => {
        return (
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit}
          >
            <
              div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                {sections}
              </div>
            </div>
          </form>
        )
      }}
    />
  )
}

export function Section({ children }) {
  return children
}

export function SectionTitle({ title, explainer }) {
  if (title || explainer) {
    return (
      <div>
        {title && <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>}
        {explainer && <p className="mt-1 max-w-2xl text-sm text-gray-500">{explainer}</p>}
      </div>
    )
  } else {
    return null
  }
}

export function SectionContents({ children }) {
  return (
    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
      {children}
    </div>
  )
}

export function Field({ name, label = 'You forgot a label stupid', children, description, initialValue }) {
  return (
    <FinalField name={name} initialValue={initialValue}>
      {
        props => {
          return (
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                {label}
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                {React.Children.map(children, (child) => {
                  return React.cloneElement(child, { ...child.props, ...props })
                })}
                {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
              </div>
            </div>
          )
        }
      }
    </FinalField>
  )
}

export function TextInput(props) {
  return (
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <input
        type='text'
        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
        {...props.input}
      />
    </div>
  )
}

export function PhotoInput(props) {
  const { name } = props.input
  return (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor={`upload-${name}`}
            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <span>Upload a file</span>
            <input
              {...props.input}
              id={`upload-${name}`}
              name={`upload-${name}`}
              type="file"
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  )
}