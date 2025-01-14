'use client'

import { dropdownIndicatorArrow } from './styles.css.ts'
import { components, DropdownIndicatorProps } from 'react-select'
import { colorType } from '@/lib/components/Icon'
import { Icon } from '@/lib'

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  const getIconColor = (): colorType => {
    if (props.selectProps.isDisabled) {
      return 'neutralGray400'
    }
    if (props.selectProps.menuIsOpen) {
      return 'blue500'
    }
    return 'neutralGray600'
  }

  return (
    <components.DropdownIndicator {...props}>
      <span
        className={dropdownIndicatorArrow({
          isMenuOpen: props.selectProps.menuIsOpen,
        })}
      >
        <Icon icon="icon/down-line" color={getIconColor()} />
      </span>
    </components.DropdownIndicator>
  )
}
