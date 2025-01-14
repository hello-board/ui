import { wrapper, titleStyle, descriptionStyle } from '@/lib/components/Empty/styles.css.ts'
import { Icon, IconNames } from '@/lib/components/Icon'

interface EmptyProps {
  title: string
  description?: string
  iconSource?: IconNames
  children?: React.ReactNode
}

export const Empty = ({ title, description, iconSource, children }: EmptyProps) => {
  return (
    <div className={wrapper}>
      {iconSource && <Icon icon={iconSource} size={40} color="neutralGray300" />}
      <h3 className={titleStyle}>{title}</h3>
      {description && <p className={descriptionStyle}>{description}</p>}
      {children}
    </div>
  )
}
