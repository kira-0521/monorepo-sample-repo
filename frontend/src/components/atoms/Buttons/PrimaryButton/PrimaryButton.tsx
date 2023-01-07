import { Button, ButtonProps } from '@mui/material'
import { FC, ReactNode } from 'react'

type PrimaryButtonProps = {
  children: ReactNode
} & ButtonProps

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  )
}
