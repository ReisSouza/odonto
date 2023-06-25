import React from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { TypographyBase } from '../types/TypographyBase'

export type HeadingProps = VariantProps<typeof S.HeadingContainer> &
  TypographyBase & {}

export const Heading: React.FC<HeadingProps> = ({
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
}: HeadingProps) => {
  return (
    <S.HeadingContainer
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
    </S.HeadingContainer>
  )
}

export default Heading

Heading.displayName = 'Heading'
