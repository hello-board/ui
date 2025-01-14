import { IconNames } from '../Icon'

export type sizeType = 'sm' | 'md' | 'lg'

export interface ToggleSwitchType {
  readonly icon?: IconNames
  readonly text?: string
  readonly disabled?: boolean
}
