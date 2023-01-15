import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { MyInput } from './MyInput'

type T = typeof MyInput
export type Meta = ComponentMeta<T>
export type Story = ComponentStoryObj<T>

const MetaData = {
  title: 'atoms/forms/MyInput',
  component: MyInput,
} as Meta

export default MetaData

export const TextInputScenario: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textbox = canvas.getByRole('textbox')
    await userEvent.type(textbox, 'たくさんの文字をテスト入力するよ')
  },
}

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
