import type {Meta, StoryObj} from '@storybook/react'
import Matches from './Matches'
import {withRouter} from 'storybook-addon-react-router-v6'

const meta: Meta<typeof Matches> = {
  title: 'widgets/Matches/Matches',
  component: Matches,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof Matches>

export const Default: Story = {
  render: () => <Matches />
}
