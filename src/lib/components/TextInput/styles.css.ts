import { createVar, style } from '@vanilla-extract/css'
import { theme } from '@/globalTheme.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const inputWidth = createVar()
export const errorBorderColor = createVar()
export const errorBoxShadow = createVar()

export const inputContainer = style({
  position: 'relative',
  background: 'transparent',
})

export const input = recipe({
  base: {
    padding: '12px',
    width: inputWidth,
    ...theme.fonts[14],
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.neutralGray800,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.neutralGray200}`,
    borderRadius: '8px',
    selectors: {
      '&::placeholder': {
        ...theme.fonts[14],
        fontWeight: theme.fontWeights.medium,
        color: theme.colors.neutralGray400,
      },
      '&:focus': {
        border: `1px solid ${errorBorderColor}`,
        boxShadow: errorBoxShadow,
        outline: 'none',
      },
      '&:hover:not(:focus, &:disabled)': {
        borderColor: theme.colors.neutralGray400,
      },
      '&:disabled': {
        backgroundColor: theme.colors.neutralGray100,
        cursor: 'not-allowed',
      },
      '&:disabled::placeholder': {
        color: theme.colors.neutralGray400,
      },
    },
  },
  variants: {
    size: {
      sm: {
        height: '32px',
      },
      md: {
        height: '40px',
      },
    },
  },
})

export const removeButtonBox = style({
  position: 'absolute',
  top: '50%',
  right: '12px',
  height: '16px',
  transform: 'translateY(-50%)',
  zIndex: 2,
})
