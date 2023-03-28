import type {Meta, StoryObj} from '@storybook/react'
import WishSliders from './WishSliders'

const meta: Meta<typeof WishSliders> = {
  title: 'widgets/EnterTest/WishSliders',
  component: WishSliders,
  tags: ['autodocs'],
  args: {
    data: {
      health: {current: 34, wish: 56},
      relationship: {current: 23, wish: 57},
      work: {current: 24, wish: 70},
      creativity: {current: 24, wish: 90}
    },
    onChange: value => {}
  }
}

export default meta
type Story = StoryObj<typeof WishSliders>

export const Primary: Story = {
  render: args => <WishSliders {...args} />
}
