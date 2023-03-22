import {render, screen} from '@testing-library/react'
import StartTestButton from './StartTest'

describe('StartButtonTest', () => {
  test('Название кнопки', () => {
    render(<StartTestButton />)
    expect(screen.getByText('Начать тестирование')).toBeInTheDocument()
  })
})
