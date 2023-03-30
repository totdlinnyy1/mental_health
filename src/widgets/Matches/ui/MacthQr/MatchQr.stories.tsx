import type {Meta, StoryObj} from '@storybook/react'
import MatchQr from './MatchQr'

const meta: Meta<typeof MatchQr> = {
  title: 'widgets/Matches/MatchQr',
  component: MatchQr,
  tags: ['autodocs'],
  args: {
    userId: 2
  }
}
export default meta
type Story = StoryObj<typeof MatchQr>

export const Default: Story = {
  render: args => <MatchQr {...args} />
}
