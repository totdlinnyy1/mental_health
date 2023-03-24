import type {Meta, StoryObj} from '@storybook/react'
import {withRouter} from 'storybook-addon-react-router-v6'

import Link from './Link'

const meta: Meta<typeof Link> = {
  title: 'widgets/Header/Link',
  component: Link,
  tags: ['autodocs'],
  decorators: [withRouter],
  args: {
    currentRoute: '/',
    name: 'Главная',
    route: '/'
  },
  argTypes: {
    route: {description: 'What page user will be navigate', control: 'text'},
    name: {description: 'Link name', control: 'text'},
    currentRoute: {description: 'Current page', control: 'text'}
  }
}
export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  render: args => <Link {...args} />
}
