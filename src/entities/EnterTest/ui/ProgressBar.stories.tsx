import type {Meta, StoryObj} from '@storybook/react'

import ProgressBarElem from './ProgressBarElem'

const meta: Meta<typeof ProgressBarElem> = {
  title: 'entities/EnterTest/ProgressBarElem',
  component: ProgressBarElem,
  tags: ['autodocs'],
  args: {
    wish: 60,
    real: 50,
    image: '🧶'
  },
  argTypes: {
    wish: {control: 'number', description: 'How many wish'},
    real: {control: 'number', description: 'How many real'},
    image: {
      control: 'radio',
      description: 'Change image',
      options: ['💼', '💋', '❤️️', '🧶']
    }
  }
}

export default meta
type Story = StoryObj<typeof ProgressBarElem>

export const Primary: Story = {
  render: args => <ProgressBarElem {...args} />
}
