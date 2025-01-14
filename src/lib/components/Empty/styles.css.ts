import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'

export const wrapper = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
})

export const titleStyle = style({
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.bold,
  ...theme.fonts[18],
  marginTop: '16px',
})

export const descriptionStyle = style({
  margin: '8px 0 16px',
  color: theme.colors.neutralGray400,
  fontWeight: theme.fontWeights.medium,
  ...theme.fonts[16],
})
