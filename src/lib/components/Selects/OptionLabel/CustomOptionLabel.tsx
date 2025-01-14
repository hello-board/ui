'use client'

import { optionLabel, optionLabelText, chip } from './styles.css.ts'
import React from 'react'
import { Icon, colorType, IconNames } from '@/lib/components/Icon'
import { Tooltip } from '@/lib'

interface FormatOptionProps {
  value: string | boolean | number
  label: string
  iconSource?: IconNames
  iconColor?: colorType
  isOverflowTooltip?: boolean
  maxLength?: number
  badge?: React.ReactNode
}

export const CustomOptionLabel = ({
  label,
  iconSource,
  iconColor,
  isOverflowTooltip,
  maxLength,
  badge,
}: FormatOptionProps) => (
  <Tooltip
    text={label}
    disabled={!isOverflowTooltip || (maxLength ? label.length <= maxLength : false)}
    direction="right"
  >
    <div className={optionLabel}>
      {iconSource && <Icon icon={iconSource} color={iconColor} />}
      <span
        className={optionLabelText({
          isOverflowTooltip,
        })}
      >
        {label}
      </span>
      {badge && <span className={chip}>{badge}</span>}
    </div>
  </Tooltip>
)
