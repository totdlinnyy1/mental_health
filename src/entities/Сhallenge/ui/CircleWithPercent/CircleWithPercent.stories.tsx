import {ComponentStory, ComponentMeta} from '@storybook/react'

import CircleWithPercent from './CircleWithPercent'

export default {
  title: 'entities/Challenge/CircleWithPercent',
  component: CircleWithPercent,
  args: {
    percent: 45
  },
  argTypes: {
    percent: {control: 'number'}
  }
} as ComponentMeta<typeof CircleWithPercent>

export const Primary: ComponentStory<typeof CircleWithPercent> = args => (
  <CircleWithPercent {...args} />
)
