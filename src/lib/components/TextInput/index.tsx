'use client'

import { TextInputProps } from './TextInput.interface'
import {
  errorBorderColor,
  errorBoxShadow,
  input,
  inputContainer,
  inputWidth,
  removeButtonBox,
} from '@/lib/components/TextInput/styles.css.ts'
import { theme } from '@/globalTheme.css.ts'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Icon } from '@/lib'

export const TextInput = ({
  type = 'text',
  state = 'success',
  defaultValue,
  value,
  placeholder,
  width = '100%',
  onClick,
  onChange,
  onKeyUp,
  onClickReset,
  pattern,
  disabled = false,
  isReadOnly = false,
  maxLength,
  autoFocus = false,
  step,
  register,
  size = 'md',
}: TextInputProps) => {
  const iconColor = state === 'error' ? 'red500' : 'neutralGray300'
  const getErrorBoxShadow =
    state === 'error'
      ? '0 2px 10px 0 rgba(255, 91, 70, 0.20)'
      : '0 2px 10px 0 rgba(70, 142, 255, 0.2)'
  const getErrorBorderColor = state === 'error' ? theme.colors.red500 : theme.colors.blue500

  return (
    <div className={inputContainer}>
      <input
        className={input({ size })}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        onKeyUp={onKeyUp}
        pattern={pattern}
        disabled={disabled}
        readOnly={isReadOnly}
        min={0}
        maxLength={maxLength}
        autoFocus={autoFocus}
        step={step}
        {...register}
        style={assignInlineVars({
          [inputWidth]: width,
          [errorBorderColor]: getErrorBorderColor,
          [errorBoxShadow]: getErrorBoxShadow,
        })}
      />
      {onClickReset && (
        <div className={removeButtonBox} onClick={onClickReset}>
          <Icon icon="icon/cancle-circle-solid" color={iconColor} />
        </div>
      )}
    </div>
  )
}
