import type {Meta, StoryObj} from '@storybook/react'

import Layout from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'widgets/Header/Layout',
  component: Layout,
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Layout>

export const Primary: Story = {
  render: args => <Layout {...args} />
}
