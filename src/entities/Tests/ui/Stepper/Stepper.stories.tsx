import type {Meta, StoryObj} from '@storybook/react'
import Stepper from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'entities/Tests/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    activeStep: 1,
    stepCount: 3
  },
  argTypes: {
    activeStep: {control: 'number', description: 'Which step is active'},
    stepCount: {control: 'number', description: 'How many steps'}
  }
}
export default meta
type Story = StoryObj<typeof Stepper>

export const Primary: Story = {
  render: args => <Stepper {...args} />
}
