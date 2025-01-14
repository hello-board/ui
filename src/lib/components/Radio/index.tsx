'use client'

import { Label } from '../Label'
import { RadioProps } from './Radio.interface'
import { iconWrapper, input, inputWrapper, label, radio, wrapper } from './styles.css'
import { Icon } from '@/lib'

export const Radio = ({
  state = 'primary',
  size = 'md',
  checked,
  name,
  labelText,
  value,
  onChange,
  isRequired = false,
  hasInfo = false,
  disabled = false,
  isFiltered = false,
}: RadioProps) => {
  const handleChange = () => {
    if (!onChange) return
    onChange()
  }

  return (
    <div className={wrapper}>
      <div className={inputWrapper}>
        <label className={label}>
          <div
            className={radio({
              size,
              state,
              checked,
              disabled,
              isFiltered,
            })}
          />
          {isFiltered && checked && (
            <div className={iconWrapper}>
              <Icon icon="icon/check-line" color="blue600" size={16} />
            </div>
          )}
          {labelText && <Label label={labelText} isRequired={isRequired} hasInfo={hasInfo} />}
          <input
            className={input}
            type="radio"
            name={name}
            checked={checked}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
        </label>
      </div>
    </div>
  )
}
