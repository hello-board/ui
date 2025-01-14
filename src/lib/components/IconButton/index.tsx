import { Icon, IconNames } from '../Icon'
import { wrapper } from './styles.css'

interface IconButtonProps {
  icon: IconNames
  size?: 'sm' | 'md'
  disabled?: boolean
}

export const IconButton = ({ icon, size = 'md', disabled = false }: IconButtonProps) => {
  const iconSize = size === 'sm' ? 12 : 16

  return (
    <button className={wrapper({ size })} disabled={disabled}>
      <Icon icon={icon} color="neutralGray500" size={iconSize} />
    </button>
  )
}
