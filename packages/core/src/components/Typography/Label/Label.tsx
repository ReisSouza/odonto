import React, { ElementType } from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { CSS } from '@/types/css'

export interface LabelProps extends VariantProps<typeof S.DisplayContainer> {
  as?: ElementType
  css?: CSS
  children?: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children, ...rest }: LabelProps) => {
  return <S.DisplayContainer {...rest}>{children}</S.DisplayContainer>
}

export default Label

Label.displayName = 'Label'
