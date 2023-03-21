import {render, screen} from '@testing-library/react'
import Link from './Link'
import {BrowserRouter} from 'react-router-dom'

describe('Header link test', () => {
  test('render header link', () => {
    render(<Link name='Главная' currentRoute='/' route='/' />, {
      wrapper: BrowserRouter
    })
    const link = screen.getByRole('link')
    expect(link).toHaveTextContent('Главная')
    expect(link).toBeInTheDocument()
  })

  test('link is active', () => {
    render(<Link name='Главная' currentRoute='/' route='/' />, {
      wrapper: BrowserRouter
    })
    const link = screen.getByRole('link')
    expect(link).toHaveStyle({fontWeight: 'bold'})
  })

  test('link is inactive', () => {
    render(<Link name='Главная' currentRoute='/' route='/fds' />, {
      wrapper: BrowserRouter
    })
    const link = screen.getByText('Главная')
    expect(link).toHaveStyle({fontWeight: 'normal'})
  })
})
