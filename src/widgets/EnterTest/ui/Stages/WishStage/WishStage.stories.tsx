import type {Meta, StoryObj} from '@storybook/react'
import {withRouter} from 'storybook-addon-react-router-v6'
import WishStage from './WishStage'

const meta: Meta<typeof WishStage> = {
  title: 'widgets/EnterTest/Stages/WishStage',
  component: WishStage,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof WishStage>

export const Default: Story = {
  render: () => <WishStage />
}
