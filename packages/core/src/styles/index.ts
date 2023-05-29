import { createStitches, defaultThemeMap } from '@stitches/react'

import { MainTheme } from './themes/main/main'
import { media } from '@odonto-ui/tokens'

export type {
  CSS,
  VariantProps,
  ComponentProps,
  ScaleValue,
  CSSProperties,
  CreateStitches,
  DefaultThemeMap,
  PropertyValue,
} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  media: {
    ...media,
  },
  theme: MainTheme,
})

export type Theme = keyof typeof MainTheme
