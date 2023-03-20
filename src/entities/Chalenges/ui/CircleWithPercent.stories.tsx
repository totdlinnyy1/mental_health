import type {Meta, StoryObj} from '@storybook/react'

import CircleWithPercent from './CircleWithPercent'

const meta: Meta<typeof CircleWithPercent> = {
  title: 'Hello world!',
  component: CircleWithPercent,
  tags: ['autodocs'],
  args: {
    percent: 45
  },
  argTypes: {
    percent: {control: 'number', description: 'How many percent'}
  }
}

export default meta
type Story = StoryObj<typeof CircleWithPercent>

export const Primary: Story = {
  render: args => <CircleWithPercent {...args} />
}
