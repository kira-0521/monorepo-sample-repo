import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { MyButton } from './MyButton'

type T = typeof MyButton
type Meta = ComponentMeta<T>
type Story = ComponentStoryObj<T>

export default {
  title: 'atoms/buttons/MyButton',
  component: MyButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
}

export const Delete: Story = {
  args: {
    children: 'Delete',
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
