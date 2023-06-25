import { CSS } from '@/types/css'
import { ElementType, ReactNode } from 'react'

export type TypographyBase = {
  as?: ElementType
  children?: ReactNode
  css?: CSS
  color?: CSS['color']
  pt?: CSS['paddingTop']
  pb?: CSS['paddingBottom']
  pl?: CSS['paddingLeft']
  pr?: CSS['paddingRight']
  mt?: CSS['marginTop']
  mb?: CSS['marginBottom']
  ml?: CSS['marginLeft']
  mr?: CSS['marginRight']
  p?: CSS['padding']
  m?: CSS['margin']
}
