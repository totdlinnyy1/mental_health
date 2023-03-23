import type {Meta, StoryObj} from '@storybook/react'
import SlidersCurrent from './SlidersCurrent'

const meta: Meta<typeof SlidersCurrent> = {
  title: 'widgets/EnterTest/SlidersCurrent',
  component: SlidersCurrent,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SlidersCurrent>

export const Primary: Story = {
  render: args => <SlidersCurrent {...args} />
}
