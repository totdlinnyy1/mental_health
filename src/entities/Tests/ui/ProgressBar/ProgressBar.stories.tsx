import type {Meta, StoryObj} from '@storybook/react'
import ProgressBar from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'entities/Tests/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {
    data: {
      work: {wish: 90, current: 15},
      relationship: {wish: 80, current: 57},
      health: {wish: 70, current: 65},
      creativity: {wish: 60, current: 35}
    }
  }
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Primary: Story = {
  render: args => <ProgressBar {...args} />
}
