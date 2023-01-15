import { memo, FC, HTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface MyRhfInputProps extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn
}

export const MyRhfInput: FC<MyRhfInputProps> = memo(
  ({ register, ...props }) => <input {...register} {...props} />
)

MyRhfInput.displayName = 'MyRhfInput'
