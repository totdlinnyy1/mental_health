import type {Meta, StoryObj} from '@storybook/react'
import {AiFillHeart} from 'react-icons/ai'
import {MdGroup} from 'react-icons/md'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'

import ProgressBarElem from './ProgressBarElem'

const icons = {
  IoMdBriefcase,
  MdGroup,
  AiFillHeart,
  IoMdColorPalette
}

const meta: Meta<typeof ProgressBarElem> = {
  title: 'entities/Tests/ProgressBarElem',
  component: ProgressBarElem,
  tags: ['autodocs'],
  args: {
    wish: 60,
    current: 50,
    icon: IoMdBriefcase
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
          IoMdBriefcase: 'work',
          MdGroup: 'relationship',
          AiFillHeart: 'health',
          IoMdColorPalette: 'creativity'
        }
      },
      description: 'What icon'
    }
  }
}

export default meta
type Story = StoryObj<typeof ProgressBarElem>

export const Primary: Story = {
  render: args => <ProgressBarElem {...args} />
}
