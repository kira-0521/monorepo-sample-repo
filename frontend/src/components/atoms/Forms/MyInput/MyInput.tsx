import { TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

type InputTypes = 'primary' | 'readOnly' | 'filledReadOnly' | 'filled'

export type MyInputProps = TextFieldProps & {
  label: string
  inputType?: InputTypes
}

const VariantMap: {
  [K in InputTypes]: TextFieldProps['variant']
} = {
  primary: 'outlined',
  readOnly: 'outlined',
  filledReadOnly: 'filled',
  filled: 'filled',
}

export const MyInput: FC<MyInputProps> = ({
  label,
  inputType = 'primary',
  ...props
}) => (
  <TextField
    {...props}
    label={label}
    variant={VariantMap[inputType]}
    InputProps={{ readOnly: inputType === ('readOnly' || 'filledReadOnly') }}
  />
)

MyInput.defaultProps = {
  inputType: 'primary',
}
