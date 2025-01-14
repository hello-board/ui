import { Icon } from '@/lib'
import { content, contentDescription, contentTitle } from '@/lib/components/Warning/styles.css.ts'

export interface WarningProps {
  title: string
  description?: string
  subDescription?: string
}

export const Warning = ({ title, description, subDescription }: WarningProps) => {
  return (
    <div className={content}>
      <Icon icon="icon/warning-triangle-solid" color="orange500" size={64} />
      <div className={contentTitle}>{title}</div>
      <div className={contentDescription}>
        {description}
        <br />
        {subDescription}
      </div>
    </div>
  )
}
