import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const labelStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const textContainer = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  minHeight: '16px',
})

export const textStyle = style({
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
})

export const requiredMark = style({
  marginTop: '3px',
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.red500,
  ...theme.fonts[14],
})

export const guideContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  height: '18px',
})

export const guideTextStyle = recipe({
  base: {
    fontWeight: theme.fontWeights.medium,
    ...theme.fonts[12],
  },
  variants: {
    state: {
      success: {
        color: theme.colors.neutralGray400,
      },
      error: {
        color: theme.colors.red500,
      },
    },
  },
})
