import type {Meta, StoryObj} from '@storybook/react'

import StartTestButton from './start_test_button'
const meta: Meta<typeof StartTestButton> = {
  title: 'share/buttons/StartTestButton',
  component: StartTestButton,
  tags: ['autodocs'],
  args: {
    path: ''
  },
  argTypes: {
    path: {
      control: 'Adress',
      description: 'Enter the address of the application page'
    }
  }
}
export default meta
type Story = StoryObj<typeof StartTestButton>

export const Primary: Story = {
  render: args => <StartTestButton {...args} />
}
