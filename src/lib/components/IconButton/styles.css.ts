import { theme } from '@/globalTheme.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const wrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: '4px',
    cursor: 'pointer',
    selectors: {
      ['&:not(:disabled):hover']: {
        backgroundColor: theme.colors.neutralGray200,
      },
      ['&:not(:disabled):active']: {
        backgroundColor: theme.colors.neutralGray300,
      },
      ['&:disabled']: {
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    },
  },
  variants: {
    size: {
      sm: {
        width: '20px',
        height: '20px',
      },
      md: {
        width: '24px',
        height: '24px',
      },
    },
  },
})
