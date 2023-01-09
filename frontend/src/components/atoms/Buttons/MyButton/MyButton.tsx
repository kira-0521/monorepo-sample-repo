import { Button, ButtonProps } from '@mui/material'
import { FC, ReactNode } from 'react'

export type MyButtonProps = {
  children: ReactNode
} & ButtonProps

export const MyButton: FC<MyButtonProps> = ({
  children,
  onClick,
  ...props
}) => (
  <Button variant="contained" onClick={onClick} {...props}>
    {children}
  </Button>
)
