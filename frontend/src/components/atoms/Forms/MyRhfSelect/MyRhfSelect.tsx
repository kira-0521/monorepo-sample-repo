import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Option {
  label: ReactNode
  value: string | number | string[]
}

interface MyRhfSelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[]
  registered: UseFormRegisterReturn
}

export const MyRhfSelect: FC<MyRhfSelectProps> = ({
  options,
  registered,
  ...props
}) => (
  <select {...props} {...registered}>
    {options.map(({ label, value }) => (
      <option key={label?.toString()} value={value}>
        {label}
      </option>
    ))}
  </select>
)
