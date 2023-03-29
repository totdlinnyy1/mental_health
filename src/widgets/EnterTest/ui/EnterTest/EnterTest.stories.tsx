import type {Meta, StoryObj} from '@storybook/react'
import EnterTest from '@widgets/EnterTest/ui/EnterTest/EnterTest'
import {withRouter} from 'storybook-addon-react-router-v6'

const meta: Meta<typeof EnterTest> = {
  title: 'widgets/EnterTest/EnterTest',
  component: EnterTest,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof EnterTest>

export const Primary: Story = {
  render: () => <EnterTest />
}
