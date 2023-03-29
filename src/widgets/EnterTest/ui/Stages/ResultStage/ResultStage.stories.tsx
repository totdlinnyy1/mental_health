import type {Meta, StoryObj} from '@storybook/react'
import ResultStage from './ResultStage'
import {withRouter} from 'storybook-addon-react-router-v6'

const meta: Meta<typeof ResultStage> = {
  title: 'widgets/EnterTest/Stages/ResultStage',
  component: ResultStage,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof ResultStage>

export const Default: Story = {
  render: () => <ResultStage />
}
