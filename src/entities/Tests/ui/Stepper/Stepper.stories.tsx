import type {Meta, StoryObj} from '@storybook/react'
import {withRouter} from 'storybook-addon-react-router-v6'
import Stepper from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'entities/Tests/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof Stepper>

export const Primary: Story = {
  render: () => <Stepper />
}
