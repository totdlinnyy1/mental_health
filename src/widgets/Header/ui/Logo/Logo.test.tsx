import {render, screen} from '@testing-library/react'
import Logo from './Logo'

describe('Header logo test', () => {
  test('render header logo', () => {
    render(<Logo />)
    const logo = screen.getByText('ЛОГО')
    expect(logo).toBeInTheDocument()
  })
})
