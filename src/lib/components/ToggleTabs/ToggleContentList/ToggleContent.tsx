import { tabContentStyle } from '../styles.css'

interface ToggleContentProps {
  content: React.ReactNode
  isActive: boolean
}

export const ToggleContent = ({ content, isActive }: ToggleContentProps) => {
  if (!isActive) return null

  return <li className={tabContentStyle}>{content}</li>
}
