import CircleWithPercent from './CircleWithPercent'
import {render, screen} from '@testing-library/react'

describe('circle with percent component test', () => {
  test('render circle with percent', () => {
    render(<CircleWithPercent percent={45} />)

    const circle = screen.getByText('45%')

    expect(circle).toBeInTheDocument()
  })
})
