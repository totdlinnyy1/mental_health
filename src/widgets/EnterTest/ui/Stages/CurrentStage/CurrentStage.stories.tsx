import type {Meta, StoryObj} from '@storybook/react'

import CurrentStage from './CurrentStage'

const meta: Meta<typeof CurrentStage> = {
  title: 'widgets/EnterTest/Stages/CurrentStage',
  component: CurrentStage,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof CurrentStage>

export const Default: Story = {
  render: () => <CurrentStage />
}
