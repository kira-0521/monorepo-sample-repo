import { render, screen } from '@testing-library/react'

import { MyButton } from './MyButton'

describe('PrimaryButton', () => {
  test('Buttonがレンダーされるか', () => {
    render(<MyButton>test</MyButton>)
    expect(screen.getByRole('button', { name: 'test' })).toBeInTheDocument()
  })

  test('Buttonがレンダーされるか', () => {})
})
