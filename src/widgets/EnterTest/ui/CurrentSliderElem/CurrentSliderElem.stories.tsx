import type {Meta, StoryObj} from '@storybook/react'
import CurrentSliderElem from './CurrentSliderElem'
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

const meta: Meta<typeof CurrentSliderElem> = {
  title: 'widgets/EnterTest/CurrentSliderElem',
  component: CurrentSliderElem,
  tags: ['autodocs'],
  args: {
    icon: IoMdBriefcase,
    title: 'Работа',
    defaultValue: 0,
    onChange: value => {}
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
type Story = StoryObj<typeof CurrentSliderElem>

export const Primary: Story = {
  render: args => <CurrentSliderElem {...args} />
}
