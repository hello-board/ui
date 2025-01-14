import { style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'

export const textWrapper = style({
  color : theme.colors.neutralGray900,
  fontWeight : theme.fontWeights.medium,
  wordBreak : 'keep-all',
  ...theme.fonts['14']
})

export const skeletonLoading = style({
  borderRadius: '8px'
})
