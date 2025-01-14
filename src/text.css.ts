import { fontFace } from '@vanilla-extract/css'

export const pretendard = fontFace([
  {
    src: '@/assets/fonts/Pretendard-Regular.woff2',
    fontWeight: '400',
    fontStyle: 'regular',
  },
  {
    src: '@/assets/fonts/Pretendard-Medium.woff2',
    fontWeight: '500',
    fontStyle: 'medium',
  },
  {
    src: '@/assets/fonts/Pretendard-SemiBold.woff2',
    fontWeight: '600',
    fontStyle: 'semiBold',
  },
  {
    src: '@/assets/fonts/Pretendard-Bold.woff2',
    fontWeight: '700',
    fontStyle: 'bold',
  }
]);

