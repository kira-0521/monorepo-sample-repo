import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './MyInput.stories'

const { TextInputScenario } = composeStories(stories)

describe('MyInput Scenario', () => {
  test('render type text', async () => {
    const textbox = render(<TextInputScenario />)

    await TextInputScenario.play({ canvasElement: textbox.container })

    expect(screen.getByRole('textbox')).toHaveValue(
      'たくさんの文字をテスト入力するよ'
    )
  })
})
