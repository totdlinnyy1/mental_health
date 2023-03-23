import type {Meta, StoryObj} from '@storybook/react'
import SlidersWish from './SlidersWish'

const meta: Meta<typeof SlidersWish> = {
  title: 'widgets/EnterTest/SlidersWish',
  component: SlidersWish,
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
type Story = StoryObj<typeof SlidersWish>

export const Primary: Story = {
  render: args => <SlidersWish {...args} />
}
