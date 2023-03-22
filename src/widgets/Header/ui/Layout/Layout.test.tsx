import {render, screen} from '@testing-library/react'
import Layout from './Layout'
import Logo from '../Logo/Logo'

describe('Header layout test', () => {
  test('render layout logo', () => {
    render(
      <Layout>
        <Logo />
      </Layout>
    )
    const logo = screen.getByText('ЛОГО')
    expect(logo).toBeInTheDocument()
  })
})
