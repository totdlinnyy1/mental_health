import type {Meta, StoryObj} from '@storybook/react'
import MatchSearch from './MatchSearch'
import {withRouter} from 'storybook-addon-react-router-v6'

const meta: Meta<typeof MatchSearch> = {
  title: 'widgets/Matches/MatchSearch',
  component: MatchSearch,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof MatchSearch>

export const Default: Story = {
  render: () => <MatchSearch />
}
