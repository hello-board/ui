import { Shadow } from '../../Shadow'
import { ToggleSwitchType, sizeType } from '../ToggleTabs.interface'
import { tabButtonListStyle } from '../styles.css'
import { ToggleSwitch } from './ToggleSwitch'

interface ToggleSwitchListProps {
  size: sizeType
  buttons: ToggleSwitchType[]
  selectedTab: number
  onClick: (index: number) => void
}

export const ToggleSwitchList = ({
  size,
  selectedTab,
  buttons,
  onClick,
}: ToggleSwitchListProps) => {
  return (
    <Shadow border={6}>
      <ul className={tabButtonListStyle({ size })}>
        {buttons.map((button, index) => (
          <ToggleSwitch
            key={`toggle_switch_${index}`}
            index={index}
            size={size}
            isActive={selectedTab === index}
            onClick={onClick}
            {...button}
          />
        ))}
      </ul>
    </Shadow>
  )
}
