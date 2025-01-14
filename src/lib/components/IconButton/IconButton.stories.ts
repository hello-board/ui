import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '.'
import icons from '../../../assets/icons.json'

const meta = {
  title: 'Component/IconButton/Default',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      description: '사이즈',
    },
    icon: {
      table: {
        type: { summary: 'select' },
      },
      options: [undefined, ...Object.keys(icons)],
      description: '아이콘',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    icon: 'icon/placeholder-line',
    disabled: false,
  },
}
