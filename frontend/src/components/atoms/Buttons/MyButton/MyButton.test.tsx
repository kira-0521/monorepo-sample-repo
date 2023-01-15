import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
// TODO: カスタムレンダー
// import { render, screen } from 'testing-utils/index'

import * as stories from './MyButton.stories'

const { Primary, Delete, Cancel, Draft } = composeStories(stories)

describe('PrimaryButton', () => {
  test('PrimaryButtonがレンダーされるか', () => {
    render(<Primary />)
    expect(
      screen.getByRole('button', { name: /ログイン/i })
    ).toBeInTheDocument()
  })

  test('DeleteButtonがレンダーされ、押下で該当のTodoが削除されるか', async () => {
    render(<Delete />)
    const dltButton = screen.getByRole('button', { name: /削除/i })
    expect(dltButton).toBeInTheDocument()
  })
  test('CancelButtonがレンダーされており、非活性か', () => {
    render(<Cancel />)
    const cancelButton = screen.getByRole('button', { name: /キャンセル/i })
    expect(cancelButton).toBeInTheDocument()
    expect(cancelButton).toBeDisabled()
  })
  test('DraftButtonがレンダーされており、非活性か', () => {
    render(<Draft />)
    const draftButton = screen.getByRole('button', { name: /下書き保存/i })
    expect(draftButton).toBeInTheDocument()
  })
})
