import { styled } from '@/styles'
import Paragraph from '../Typography/Paragraph/Paragraph'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Paragraph, {
  color: '$secondary-normal',

  fontWeight: '$medium',
  fontFamily: '$default',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$1',
  backgroundColor: '$primary-light-normal',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary-normal',
      },
    },
  },
})
