import type {Meta, StoryObj} from '@storybook/react'
import MatchQr from './MatchQr'

const meta: Meta<typeof MatchQr> = {
  title: 'widgets/Matches/MatchQr',
  component: MatchQr,
  tags: ['autodocs'],
  args: {
    link: 'https://kartinkin.net/pics/uploads/posts/2022-09/1663154690_49-kartinkin-net-p-kot-s-pechalnimi-glazami-krasivo-55.jpg'
  },
  argTypes: {
    link: {description: 'What link in qr-code'}
  }
}
export default meta
type Story = StoryObj<typeof MatchQr>

export const Default: Story = {
  render: args => <MatchQr {...args} />
}
