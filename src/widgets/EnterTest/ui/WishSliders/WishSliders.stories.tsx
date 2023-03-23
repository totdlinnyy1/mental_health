import type {Meta, StoryObj} from '@storybook/react'
import WishSliders from './WishSliders'

const meta: Meta<typeof WishSliders> = {
  title: 'widgets/EnterTest/WishSliders',
  component: WishSliders,
  tags: ['autodocs'],
  args: {
    health: 34,
    relationship: 10,
    work: 56,
    creativity: 20
  },
  argTypes: {
    health: {description: 'How many current health'},
    relationship: {description: 'How many current relationship'},
    work: {description: 'How many current work'},
    creativity: {description: 'How many current creativity'}
  }
}

export default meta
type Story = StoryObj<typeof WishSliders>

export const Primary: Story = {
  render: args => <WishSliders {...args} />
}
