import { TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

export type MyInputProps = TextFieldProps & {
  label: string
  inputType: 'primary' | 'readOnly' | 'filledReadOnly' | 'filled'
}

const VariantMap: {
  [K in MyInputProps['inputType']]: TextFieldProps['variant']
} = {
  primary: 'outlined',
  readOnly: 'outlined',
  filledReadOnly: 'filled',
  filled: 'filled',
}

export const MyInput: FC<MyInputProps> = ({ label, inputType, ...props }) => (
  <TextField
    {...props}
    label={label}
    variant={VariantMap[inputType]}
    InputProps={{ readOnly: inputType === ('readOnly' || 'filledReadOnly') }}
  />
)
