import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'

export const parent = style({})

export const wrapper = style({
  display: 'flex',
  width: '100%',
  height: '40px',
  padding: '4px 4px 4px 12px',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '6px',
  border: `1px solid ${theme.colors.neutralGray200}`,
  cursor: 'pointer',
})

export const inputStyle = style({
  display: 'none',
})

export const placeholderStyle = style({
  color: theme.colors.neutralGray400,
  fontWeight: theme.fontWeights.medium,
  ...theme.fonts[14],
})
