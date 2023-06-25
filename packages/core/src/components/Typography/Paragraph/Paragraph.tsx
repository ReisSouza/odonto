import React from 'react'

import { VariantProps } from '@stitches/react'

import * as S from './styles'
import { TypographyBase } from '../types/TypographyBase'

export type ParagraphProps = VariantProps<typeof S.ParagraphContainer> &
  TypographyBase & {}

const Paragraph: React.FC<ParagraphProps> = ({
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
}: ParagraphProps) => {
  return (
    <S.ParagraphContainer
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
      {...rest}
    >
      {children}
    </S.ParagraphContainer>
  )
}

export default Paragraph

Paragraph.displayName = 'Paragraph'
