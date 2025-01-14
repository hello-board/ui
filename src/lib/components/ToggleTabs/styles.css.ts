import { theme } from '@/globalTheme.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const tabsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  height: 'auto',
})

export const tabButtonListStyle = recipe({
  base: {
    display: 'flex',
    width: '100%',
    padding: '6px',
    backgroundColor: theme.colors.neutralGray50,
    borderRadius: '6px',
  },
  variants: {
    size: {
      sm: {
        height: '40px',
      },
      md: {
        height: '44px',
      },
      lg: {
        height: '48px',
      },
    },
  },
})

export const tabButtonStyle = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    width: '100%',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',

    ':focus': {
      outline: 'none',
    },
  },
  variants: {
    size: {
      sm: {
        height: '28px',
      },
      md: {
        height: '32px',
      },
      lg: {
        height: '36px',
      },
    },
    isActive: {
      true: {
        backgroundColor: theme.colors.white,
        boxShadow:
          '0px 6px 14px -2px var(--color-transparent-default-006, rgba(2, 44, 111, 0.06)), 0px 0px 18px -5px var(--color-transparent-default-006, rgba(2, 44, 111, 0.06))',
      },
      false: {
        backgroundColor: 'transparent',
        ':hover': {
          backgroundColor: theme.colors.neutralGray100,
        },
        ':active': {
          backgroundColor: theme.colors.neutralGray200,
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        pointerEvents: 'none',
      },
    },
  },
})

export const labelStyle = recipe({
  base: {
    ...theme.fonts[14],
    fontWeight: theme.fontWeights.medium,
  },
  variants: {
    isActive: {
      true: {
        color: theme.colors.neutralGray800,
      },
      false: {
        color: theme.colors.neutralGray500,
      },
    },
  },
})

export const tabContentListStyle = style({
  width: '100%',
})

export const tabContentStyle = style({
  display: 'block',
  width: '100%',
  height: 'auto',
})
