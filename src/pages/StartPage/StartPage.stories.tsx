import type {Meta, StoryObj} from '@storybook/react'

import StartPage from './StartPage'

const meta: Meta<typeof StartPage> = {
  title: 'pages/EnterTest',
  component: StartPage,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof StartPage>

export const Default: Story = {
  render: () => <StartPage />
}
