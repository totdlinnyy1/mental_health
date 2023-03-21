import type {Meta, StoryObj} from '@storybook/react'

import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'widgets/Header/Logo',
  component: Logo,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Logo>

export const Primary: Story = {
  render: () => <Logo />
}
