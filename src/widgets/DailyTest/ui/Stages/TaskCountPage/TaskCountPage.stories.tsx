import type {Meta, StoryObj} from '@storybook/react'
import TaskCountPage from './TaskCountPage'

const meta: Meta<typeof TaskCountPage> = {
  title: 'widgets/DailyTest/TaskCountPage',
  component: TaskCountPage,
  tags: ['autodocs'],
  args: {
    activeStep: 2,
    stepCount: 3
  },
  argTypes: {
    activeStep: {control: 'number', description: 'Which step is active'},
    stepCount: {control: 'number', description: 'How many steps'}
  }
}

export default meta
type Story = StoryObj<typeof TaskCountPage>

export const Primary: Story = {
  render: args => <TaskCountPage {...args} />
}
