import { tabContentListStyle } from '../styles.css'
import { ToggleContent } from './ToggleContent'

interface ToggleContentListProps {
  contents: React.ReactNode[]
  selectedTab: number
}

export const ToggleContentList = ({ contents, selectedTab }: ToggleContentListProps) => {
  return (
    <ul className={tabContentListStyle}>
      {contents.map((content, index) => {
        return (
          <ToggleContent
            key={`toggle_content_${index}`}
            content={content}
            isActive={selectedTab === index}
          />
        )
      })}
    </ul>
  )
}
