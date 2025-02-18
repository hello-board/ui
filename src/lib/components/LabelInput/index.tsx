'use client'

import { LabelInputProps } from './LabelInput.interface'
import { Icon, TextInput } from '@/lib'
import { theme } from '@/globalTheme.css.ts'
import {
  guideContainer,
  guideTextStyle,
  labelStyle,
  requiredMark,
  textContainer,
  textStyle,
  wrapper,
} from './styles.css.ts'

export const LabelInput = ({
  label,
  labelTextSize = 'md',
  isLabelRequired = false,
  guideText,
  type = 'text',
  state = 'success',
  value,
  placeholder,
  width = '100%',
  onClick,
  onChange,
  onKeyUp,
  register,
  pattern,
  maxLength,
  disabled = false,
  isReadOnly = false,
  icon,
  inputSize = 'md',
}: LabelInputProps) => {
  const iconColor = state === 'error' ? 'red500' : 'neutralGray400'

  return (
    <div className={wrapper}>
      <label className={labelStyle}>
        {label && (
          <div className={textContainer}>
            {icon}
            <span
              className={textStyle}
              style={{
                ...(labelTextSize === 'md' ? theme.fonts[14] : theme.fonts[16]),
              }}
            >
              {label}
            </span>
            {isLabelRequired && <span className={requiredMark}>*</span>}
          </div>
        )}
        <TextInput
          width={width}
          state={state}
          type={type}
          value={value}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}
          onKeyUp={onKeyUp}
          pattern={pattern}
          disabled={disabled}
          register={register}
          maxLength={maxLength}
          isReadOnly={isReadOnly}
          size={inputSize}
        />
      </label>
      {guideText && (
        <div className={guideContainer}>
          <Icon icon="icon/info-circle-line" color={iconColor} />
          <span className={guideTextStyle({ state })}>{guideText}</span>
        </div>
      )}
    </div>
  )
}
