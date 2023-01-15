import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { MyButton } from './MyButton'

type T = typeof MyButton
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  title: 'atoms/buttons/MyButton',
  component: MyButton,
} as Meta

export const Primary: Story = {
  args: {
    children: 'ログイン',
  },
}

export const Delete: Story = {
  args: {
    children: '削除',
    color: 'error',
  },
}

export const Cancel = {
  args: {
    children: 'キャンセル',
    disabled: true,
    onClick: action('onCancel'),
  },
}

export const Draft = {
  args: {
    children: '下書き保存',
    variant: 'outlined',
    color: 'success',
    onClick: action('onSave'),
  },
}
