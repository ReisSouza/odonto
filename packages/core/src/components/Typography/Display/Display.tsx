import React from 'react'
import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { TypographyBase } from '../types/TypographyBase'

export type DisplayProps = VariantProps<typeof S.DisplayContainer> &
  TypographyBase & {}

const Display: React.FC<DisplayProps> = ({
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
}: DisplayProps) => {
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

export default Display

Display.displayName = 'Display'
