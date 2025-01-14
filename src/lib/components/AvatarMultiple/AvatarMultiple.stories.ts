import type { Meta, StoryObj } from '@storybook/react'
import { AvatarMultiple } from './index'

const meta = {
  title: 'Component/AvatarMultiple',
  component: AvatarMultiple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof AvatarMultiple>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm',
    members: [],
  },
}
