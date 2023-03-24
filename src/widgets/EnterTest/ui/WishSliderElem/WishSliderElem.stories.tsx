import type {Meta, StoryObj} from '@storybook/react'
import {AiFillHeart} from 'react-icons/ai'
import {MdGroup} from 'react-icons/md'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'
import WishSliderElem from './WishSliderElem'

const icons = {
  IoMdBriefcase,
  MdGroup,
  AiFillHeart,
  IoMdColorPalette
}

const titles = ['Работа', 'Отношения', 'Здоровье', 'Творчество']

const meta: Meta<typeof WishSliderElem> = {
  title: 'widgets/EnterTest/WishSliderElem',
  component: WishSliderElem,
  tags: ['autodocs'],
  args: {
    icon: IoMdBriefcase,
    title: 'Работа',
    current: 45
  },
  argTypes: {
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
    },
    title: {
      options: titles,
      description: 'What text',
      control: 'select'
    },
    current: {control: 'number', description: 'How many current'}
  }
}

export default meta
type Story = StoryObj<typeof WishSliderElem>

export const Primary: Story = {
  render: args => <WishSliderElem {...args} />
}
