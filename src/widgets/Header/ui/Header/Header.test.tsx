import {render, screen} from '@testing-library/react'

import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

describe('Header test', () => {
  test('render header', () => {
    render(<Header />, {wrapper: BrowserRouter})
    const logo = screen.getByText('ЛОГО')
    expect(logo).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links.length).toBe(4)

    const avatar = screen.getByRole('img')
    expect(avatar).toBeInTheDocument()
  })
})
