import { Meta, StoryObj } from '@storybook/react'
import { Shadow } from '.'
import { ShadowType } from './Shadow.interface'

const meta = {
  title: 'Component/Shadow',
  component: Shadow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: '그림자 타입',
    },
    isTurnOver: {
      description: '뒤집힘 여부',
    },
    children: {
      description: '자식 요소',
    },
  },
} satisfies Meta<typeof Shadow>

export default meta
type Story = StoryObj<typeof meta>

interface Args {
  type?: ShadowType
  isTurnOver?: boolean
  children: React.ReactNode
}

export const Default: Story = ({
  type = Default.args.type,
  isTurnOver = Default.args.isTurnOver,
  children,
}: Args) => (
  <Shadow type={type} isTurnOver={isTurnOver}>
    {children}
  </Shadow>
)

Default.args = {
  type: 'shadowInner',
  isTurnOver: false,
  children: <div style={{ width: '90px', height: '90px' }}></div>,
}
