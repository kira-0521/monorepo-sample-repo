import { Stack } from '@mui/material'
import { FC, FormEventHandler, HTMLAttributes, ReactNode } from 'react'

type MyFormProps = HTMLAttributes<HTMLFormElement> & {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}

export const MyForm: FC<MyFormProps> = ({ children, onSubmit, ...props }) => (
  <Stack {...props} component="form" onSubmit={onSubmit}>
    {children}
  </Stack>
)
