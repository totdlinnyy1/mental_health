import type {Meta, StoryObj} from '@storybook/react'
import Result from './Result'

const meta: Meta<typeof Result> = {
  title: 'widgets/Matches/Result',
  component: Result,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Result>

export const Primary: Story = {
  render: () => <Result />
}
