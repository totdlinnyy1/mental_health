import type {Meta, StoryObj} from '@storybook/react'
import CurrentSliders from './CurrentSliders'

const meta: Meta<typeof CurrentSliders> = {
  title: 'widgets/EnterTest/CurrentSliders',
  component: CurrentSliders,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CurrentSliders>

export const Primary: Story = {
  render: args => <CurrentSliders {...args} />
}
