import type {Meta, StoryObj} from '@storybook/react'

import UserAvatar from './UserAvatar'

const meta: Meta<typeof UserAvatar> = {
  title: 'entities/User/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  args: {
    size: 'md'
  },
  argTypes: {
    size: {control: 'radio', options: ['sm', 'md', '2xl']}
  }
}
export default meta
type Story = StoryObj<typeof UserAvatar>

export const Primary: Story = {
  render: args => <UserAvatar {...args} />
}
