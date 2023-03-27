import type {Meta, StoryObj} from '@storybook/react'
import InfoStage from './InfoStage'

const meta: Meta<typeof InfoStage> = {
  title: 'widgets/EnterTest/Stages/InfoStage',
  component: InfoStage,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof InfoStage>

export const Default: Story = {
  render: () => <InfoStage />
}
