import React from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { TypographyBase } from '../types/TypographyBase'

export type LabelProps = VariantProps<typeof S.DisplayContainer> &
  TypographyBase & {}

const Label: React.FC<LabelProps> = ({
  children,
  css,
  color,
  pt,
  pb,
  pl,
  pr,
  mt,
  mb,
  ml,
  mr,
  p,
  m,
  ...rest
}: LabelProps) => {
  return (
    <S.DisplayContainer
      {...rest}
      css={{
        ...css,
        color,
        padding: p,
        margin: m,
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginTop: mt,
        paddingBottom: pb,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
      }}
    >
      {children}
    </S.DisplayContainer>
  )
}

export default Label

Label.displayName = 'Label'
