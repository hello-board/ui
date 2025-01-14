import { useState } from 'react'
import { ToggleContentList } from './ToggleContentList'
import { ToggleSwitchList } from './ToggleSwitchList'
import { ToggleSwitchType, sizeType } from './ToggleTabs.interface'
import { tabsWrapper } from './styles.css'

interface ToggleTabsProps {
  size?: sizeType
  buttons: ToggleSwitchType[]
  contents: React.ReactNode[]
}

export const ToggleTabs = ({ size = 'md', buttons, contents }: ToggleTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
  }

  return (
    <div className={tabsWrapper}>
      <ToggleSwitchList
        size={size}
        buttons={buttons}
        selectedTab={selectedTab}
        onClick={handleTabSelect}
      />
      <ToggleContentList contents={contents} selectedTab={selectedTab} />
    </div>
  )
}
