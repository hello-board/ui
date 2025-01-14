import { ReactNode } from 'react'
import { ToastOptions } from 'react-toastify'
import { ToastButton } from './ToastButton'
import { colorType, Icon, IconNames } from '@/lib/components/Icon'
import { TOAST_ICONS, TOAST_ICONS_COLORS } from '@/lib/components/Toast/Toast.constants.ts'
import { ToastButtonProps } from '@/lib/components/Toast/Toast.interface.ts'

export const getToastContent = (message: ReactNode, button?: ToastButtonProps) => {
  return (
    <>
      <p>{message}</p>
      <ToastButton button={button} state={'primary'} />
    </>
  )
}

export const getToastIcon = (type: 'success' | 'error' | 'warning' | 'info' | 'pending') => {
  const icon = TOAST_ICONS[type] as IconNames
  const iconColor = TOAST_ICONS_COLORS[type] as colorType
  return <Icon icon={icon} color={iconColor} size={24} />
}

export const getDefaultOptions = (
  type: 'success' | 'error' | 'warning' | 'info' | 'pending',
  options: ToastOptions,
) => {
  return {
    icon: getToastIcon(type),
    ...options,
  }
}
