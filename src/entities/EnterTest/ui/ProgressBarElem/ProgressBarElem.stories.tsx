import type {Meta, StoryObj} from '@storybook/react'
import {BsEmojiKiss} from 'react-icons/bs'
import {FaBasketballBall} from 'react-icons/fa'
import {FcLike, FcBriefcase} from 'react-icons/fc'

import ProgressBarElem from './ProgressBarElem'

const icons = {
  FcBriefcase,
  BsEmojiKiss,
  FcLike,
  FaBasketballBall
}

const meta: Meta<typeof ProgressBarElem> = {
  title: 'entities/EnterTest/ProgressBarElem',
  component: ProgressBarElem,
  tags: ['autodocs'],
  args: {
    wish: 60,
    current: 50
  },
  argTypes: {
    wish: {control: 'number', description: 'How many wish'},
    current: {control: 'number', description: 'How many real'},
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          FcBriefcase: 'case',
          BsEmojiKiss: 'relationship',
          FcLike: 'health',
          FaBasketballBall: 'creativity'
        }
      },
      description: 'Change image'
    }
  }
}

export default meta
type Story = StoryObj<typeof ProgressBarElem>

export const Primary: Story = {
  render: args => <ProgressBarElem {...args} />
}
