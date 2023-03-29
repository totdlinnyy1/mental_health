import type {Meta, StoryObj} from '@storybook/react'
import TaskCountStage from './TaskCountStage'

const meta: Meta<typeof TaskCountStage> = {
  title: 'widgets/DailyTest/TaskCountStage',
  component: TaskCountStage,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TaskCountStage>

export const Primary: Story = {
  render: () => <TaskCountStage />
}
