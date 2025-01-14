import { ReactElement, ReactNode } from 'react'
import { MultiValueGenericProps, OptionProps } from 'react-select'

export interface SelectProps {
  closeMenuOnSelect?: boolean
  options: any[]
  isMulti?: boolean
  defaultValue?: any
  value?: any
  onChange?: (options: any, action?: any) => void
  onBlur?: () => void
  placeholder?: string
  error?: object
  Option?: (props: OptionProps<any>) => ReactElement
  isNoDropdownIndicator?: boolean
  styles?: StylesProps
  disabled?: boolean
  isSearchable?: boolean
  onInputChange?: (value: string, action?: any) => void
  isClearable?: boolean
  MultiValueLabel?: (props: MultiValueGenericProps<any>) => ReactElement
  noOptionsMessage?: string | ReactNode
  inputValue?: string
  isMenuPortalOff?: boolean
  closeMenuOnScroll?: boolean
  isCreatable?: boolean
  size?: 'sm' | 'md'
}

export interface OptionStyleProps {
  isFocused: boolean
  isSelected: boolean
  data: unknown
}

export interface StylesProps {
  [key: string]: any
}
