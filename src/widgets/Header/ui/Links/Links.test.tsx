import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import Links from './Links'

describe('Header links test', () => {
  test('render header links', () => {
    render(<Links />, {wrapper: BrowserRouter})
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveTextContent('Главная')
    expect(links[1]).toHaveTextContent('Челленджи')
    expect(links[2]).toHaveTextContent('Мои мэтчи')
    expect(links[3]).toHaveTextContent('Библиотека заданий')
    expect(links.length).toBe(4)
  })
})
