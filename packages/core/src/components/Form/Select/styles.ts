import { keyframes } from '@stitches/react'

import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@/styles'

export const SelectContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  flex: 1,
})

const slideDownAndFadeOpen = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})
const slideDownAndFadeClosed = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-2px)' },
})

export const DropdownContainer = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: '$10',
  marginTop: '4px',
  width: 'stretch',
  gap: '$1',

  borderRadius: '$2',
  flexDirection: 'column',

  '@table': {
    minWidth: 'stretch',
  },
  padding: '8px',
  // paddingRight: '0px',
  background: '$white',
  boxShadow: '$md',
  overflow: 'auto',
  maxHeight: '300px',
  variants: {
    open: {
      true: {
        display: 'flex',
        opacity: 1,
        animationName: `${slideDownAndFadeOpen}`,
      },
      false: {
        animationName: `${slideDownAndFadeClosed}`,
        opacity: 0,
        display: 'none',
      },
    },
  },
})

export const ContainedTextField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  flex: 1,
})

export const WrappedInput = styled('div', {
  alignItems: 'center',
  boxSizing: 'border-box',

  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$secondary-light-active',

  display: 'flex',
  gap: '$2',
  '& input:autofill': {
    '-webkit-transition-delay': '9999s',
    transitionDelay: '9999s',
  },

  '& svg': {
    color: '$secondary-normal',
    fill: '$secondary-light-active',
    '& path': {
      fill: '$secondary-light-active',
    },
  },

  '&:hover': {
    borderColor: '$secondary-normal',
    '& svg': {
      fill: '$secondary-normal',
      '& path': {
        fill: '$secondary-normal',
      },
    },
  },
  '&:has(input:focus)': {
    borderColor: '$secondary-hover',
    '& svg': {
      fill: '$secondary-hover',
      '& path': {
        fill: '$secondary-hover',
      },
    },
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  variants: {
    size: {
      small: {
        height: '32px !important',

        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$xxs',

        borderRadius: '$1',
      },
      medium: {
        height: '40px !important',

        padding: '$2 $4',
        borderRadius: '$2',

        fontSize: '$xs',
      },
      large: {
        height: '48px !important',
        padding: '$3 $4',
        borderRadius: '$3',

        fontSize: '$sm',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  color: '$secondary-normal',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '100%',

  '&::-webkit-calendar-picker-indicator': {
    display: 'none',
  },

  '&[type="date"]::-webkit-calendar-picker-indicator': {
    display: 'none',
    '-webkit-appearance': 'none',
    backgroundImage: 'none',
  },

  appearance: 'none',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$secondary-light-active',
  },

  '&:hover': {
    '&::placeholder': {
      color: '$secondary-light-active',
    },
  },
  '-webkit-autofil': {
    color: 'red',
    border: '2px solid red',
  },

  '&:autofil': {
    color: 'red',
    border: '2px solid red',
  },

  variants: {
    size: {
      small: {
        fontSize: '$xxs',
      },
      medium: {
        fontSize: '$xxs',
      },
      large: {
        fontSize: '$xs',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
  color: '$feedback-error-normal',
  variants: {
    size: {
      small: {
        fontSize: '$xxxs',
      },
      medium: {
        fontSize: '$xxs',
      },
      large: {
        fontSize: '$xs',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-normal',
  fontWeight: '$bold',
  fontFamily: '$default',

  '& > span': {
    fontSize: '$xxxs',
    color: '$secondary-light-active',
  },

  '& .isRequired': {
    color: '$feedback-error-normal',
  },
  variants: {
    size: {
      small: {
        fontSize: '$xxxs',
      },
      medium: {
        fontSize: '$xxs',
      },
      large: {
        fontSize: '$xs',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})
