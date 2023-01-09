import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyButton } from './MyButton'

export default {
  title: 'atoms/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}

export const Delete = Template.bind({})
Delete.args = {
  children: 'Delete',
  color: 'error',
}

export const Cancel = Template.bind({})
Cancel.args = {
  children: 'キャンセル',
  disabled: true,
}

export const Draft = Template.bind({})
Draft.args = {
  children: '下書き保存',
  variant: 'outlined',
  color: 'success',
}
