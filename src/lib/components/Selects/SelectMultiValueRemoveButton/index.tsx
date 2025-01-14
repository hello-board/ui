import { multiValueRemoveButton } from './styles.css.ts'
import { components, MultiValueRemoveProps } from 'react-select'
import { Icon } from '@/lib'

export const SelectMultiValueRemoveButton = (props: MultiValueRemoveProps) => {
  const isDisabled = props.selectProps?.isDisabled
  if (isDisabled) return null

  return (
    <components.MultiValueRemove {...props}>
      <button className={multiValueRemoveButton} type="button">
        <Icon icon="icon/cancle-circle-solid" color="neutralGray500" />
      </button>
    </components.MultiValueRemove>
  )
}
