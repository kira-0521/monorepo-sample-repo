import { Typography, TypographyProps } from '@mui/material'
import { FC, ReactNode } from 'react'

type OverrideTypographyProps = {
  children: ReactNode
} & TypographyProps

export const OverrideTypography: FC<OverrideTypographyProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>
}
