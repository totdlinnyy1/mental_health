import type {Meta, StoryObj} from '@storybook/react'
import CurrentSliders from './CurrentSliders'

const meta: Meta<typeof CurrentSliders> = {
  title: 'widgets/EnterTest/CurrentSliders',
  component: CurrentSliders,
  tags: ['autodocs'],
  args: {
    data: {
      health: {current: 0, wish: 0},
      creativity: {current: 0, wish: 0},
      work: {current: 0, wish: 0},
      relationship: {current: 0, wish: 0}
    },
    onChange: () => {}
  }
}

export default meta
type Story = StoryObj<typeof CurrentSliders>

export const Primary: Story = {
  render: args => <CurrentSliders {...args} />
}
