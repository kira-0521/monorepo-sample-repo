import { Meta, Story } from '@storybook/react'
import { MyInput, MyInputProps } from './MyInput'

const meta: Meta = {
  title: 'atoms/MyInput',
  component: MyInput,
  parameters: {
    controls: {
      expanded: true,
    },
  },
}

export default meta

const Template: Story<MyInputProps> = (args) => <MyInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'メールアドレス',
  placeholder: 'メールアドレス',
  inputType: 'primary',
}

// TODO: 右側だけエッジを効かせる
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  inputType: 'readOnly',
  defaultValue: 'GET',
}

export const Filled = Template.bind({})
Filled.args = {
  inputType: 'filled',
  label: 'Filled',
}

export const FilledReadOnly = Template.bind({})
FilledReadOnly.args = {
  inputType: 'filledReadOnly',
  defaultValue: 'filledReadOnly',
  InputProps: {
    readOnly: true,
  },
}
