import icons from '../../../assets/icons.json'
import React, { ReactElement } from 'react'
import { COLORS } from '@/constants/colors.ts'

export type IconNames = keyof typeof icons
export type colorType = keyof typeof COLORS

export interface IconProps {
  icon: IconNames
  size?: number
  style?: React.CSSProperties
  onClick?: () => void
  color?: colorType
}

export const Icon = ({
  icon,
  size = 16,
  style,
  onClick,
  color = 'black',
}: IconProps): ReactElement => {
  const paths = icons[icon]?.svg
  const fill = COLORS[color]

  if (!paths) return <></>
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={style} onClick={onClick}>
      {paths.map((path: string, index: number) => (
        <path fill-rule="evenodd" clip-rule="evenodd" key={index} d={path} fill={fill}></path>
      ))}
    </svg>
  )
}
