import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MyInput } from './MyInput'

type T = typeof MyInput
export type Meta = ComponentMeta<T>
export type Story = ComponentStoryObj<T>

export default {
  title: 'atoms/forms/MyInput',
  component: MyInput,
} as Meta

export const Primary: Story = {
  args: {
    label: 'メールアドレス',
    placeholder: 'メールアドレス',
    inputType: 'primary',
  },
}
// TODO: 右側だけエッジを効かせる
export const ReadOnly: Story = {
  args: {
    inputType: 'readOnly',
    defaultValue: 'GET',
  },
}

export const Filled: Story = {
  args: {
    inputType: 'filled',
    label: 'Filled',
  },
}

export const FilledReadOnly: Story = {
  args: {
    inputType: 'filledReadOnly',
    defaultValue: 'filledReadOnly',
  },
}
