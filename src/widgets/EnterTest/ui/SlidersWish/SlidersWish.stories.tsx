import type {Meta, StoryObj} from '@storybook/react'
import SlidersWish from './SlidersWish'

const meta: Meta<typeof SlidersWish> = {
  title: 'widgets/EnterTest/SlidersWish',
  component: SlidersWish,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SlidersWish>

export const Primary: Story = {
  render: args => <SlidersWish {...args} />
}
