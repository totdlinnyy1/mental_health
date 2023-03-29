import type {Meta, StoryObj} from '@storybook/react'
import Survey from './Survey'

const meta: Meta<typeof Survey> = {
  title: 'widgets/Matches/Survey',
  component: Survey,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Survey>

export const Primary: Story = {
  render: () => <Survey />
}
