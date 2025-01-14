import { Icon } from '@/lib'
import { wrapper } from './styles.css.ts'
interface ErrorMessageProps {
  error?: unknown
}
export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null

  return (
    <div className={wrapper}>
      <Icon icon="icon/info-circle-solid" color="red500" size={14} />
      {error as string}
    </div>
  )
}
