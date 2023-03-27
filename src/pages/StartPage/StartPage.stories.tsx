import type {Meta, StoryObj} from '@storybook/react'

import StartPage from './StartPage'
import {withRouter} from 'storybook-addon-react-router-v6'

const meta: Meta<typeof StartPage> = {
  title: 'pages/EnterTest',
  component: StartPage,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof StartPage>

export const Default: Story = {
  render: () => <StartPage />
}
