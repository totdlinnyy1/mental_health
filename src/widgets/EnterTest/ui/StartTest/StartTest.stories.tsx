import type {Meta, StoryObj} from '@storybook/react'

import StartTestButton from './StartTest'
const meta: Meta<typeof StartTestButton> = {
  title: 'share/buttons/StartTestButton',
  component: StartTestButton,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof StartTestButton>

export const Primary: Story = {
  render: () => <StartTestButton />
}
