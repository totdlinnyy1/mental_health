import type {Meta, StoryObj} from '@storybook/react'
import {withRouter} from 'storybook-addon-react-router-v6'

import Links from './Links'

const meta: Meta<typeof Links> = {
  title: 'widgets/Header/Links',
  component: Links,
  tags: ['autodocs'],
  decorators: [withRouter]
}
export default meta
type Story = StoryObj<typeof Links>

export const Primary: Story = {
  render: () => <Links />
}
