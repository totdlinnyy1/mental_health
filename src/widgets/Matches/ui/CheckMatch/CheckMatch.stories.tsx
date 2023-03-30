import type {Meta, StoryObj} from '@storybook/react'
import CheckMatch from './CheckMatch'
import {withRouter} from 'storybook-addon-react-router-v6'

const meta: Meta<typeof CheckMatch> = {
  title: 'widgets/Matches/CheckMatch',
  component: CheckMatch,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof CheckMatch>

export const Default: Story = {
  render: () => <CheckMatch />
}
