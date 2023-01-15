import { css } from '@emotion/react'
import { memo, FC, HTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

const style = css({
  border: '3px solid #000',
  borderRadius: '5px',
})

interface MyRhfInputProps extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn
}

export const MyRhfInput: FC<MyRhfInputProps> = memo(
  ({ register, ...props }) => <input {...register} {...props} css={style} />
)

MyRhfInput.displayName = 'MyRhfInput'
