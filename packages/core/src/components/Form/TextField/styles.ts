import { styled } from '@/styles'
import * as LabelPrimitive from '@radix-ui/react-label'

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

        borderRadius: '$2',
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
        borderRadius: '$2',

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
