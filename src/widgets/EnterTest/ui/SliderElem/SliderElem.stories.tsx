import type {Meta, StoryObj} from '@storybook/react'
import SliderElem from './SliderElem'
import {AiFillHeart} from 'react-icons/ai'
import {MdGroup} from 'react-icons/md'
import {IoMdBriefcase, IoMdColorPalette} from 'react-icons/io'

const icons = {
  IoMdBriefcase,
  MdGroup,
  AiFillHeart,
  IoMdColorPalette
}

const titles = ['Работа', 'Отношения', 'Здоровье', 'Творчество']

const meta: Meta<typeof SliderElem> = {
  title: 'widgets/EnterTest/SliderElem',
  component: SliderElem,
  tags: ['autodocs'],
  args: {
    icon: IoMdBriefcase,
    title: 'Работа'
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
    }
  }
}

export default meta
type Story = StoryObj<typeof SliderElem>

export const Primary: Story = {
  render: args => <SliderElem {...args} />
}
