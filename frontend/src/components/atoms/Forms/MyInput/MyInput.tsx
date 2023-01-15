import { TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

const VARIANT_MAP = {
  primary: 'outlined',
  readOnly: 'outlined',
  filledReadOnly: 'filled',
  filled: 'filled',
} as const

export type MyInputProps = TextFieldProps & {
  label?: string
  inputType: keyof typeof VARIANT_MAP
}

export const MyInput: FC<MyInputProps> = ({
  label,
  inputType = 'primary',
  ...props
}) => (
  <TextField
    {...props}
    label={label || undefined}
    variant={VARIANT_MAP[inputType]}
    InputProps={{
      readOnly: inputType === 'readOnly' || inputType === 'filledReadOnly',
    }}
  />
)

MyInput.defaultProps = {
  label: '',
}
