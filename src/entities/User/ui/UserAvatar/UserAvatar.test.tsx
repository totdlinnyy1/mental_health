import {render, screen} from '@testing-library/react'
import UserAvatar from './UserAvatar'

describe('User Avatar test', () => {
  test('render user avatar', () => {
    render(<UserAvatar />)
    const avatar = screen.getByRole('img')
    expect(avatar).toBeInTheDocument()
  })
})
