import { keyframes, styled } from '@/styles'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'

export const WrappedCheckbox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
  alignItems: 'center',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  borderRadius: '$1',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:disabled': {
    background: '$border !important',
    color: '$white',
    cursor: 'not-allowed',
    borderColor: '$border !important',
  },

  variants: {
    size: {
      small: {
        width: '$4',
        height: '$4',
      },
      medium: {
        width: '$6',
        height: '$6',
      },
      large: {
        width: '$8',
        height: '$8',
      },
    },
    color: {
      primary: {
        borderWidth: '$hairline',
        borderStyle: 'solid',
        borderColor: '$primary-normal',

        '&:hover': {
          borderColor: '$primary-hover',
        },

        '&:active': {
          borderColor: '$primary-active',
        },

        '&[data-state="checked"]': {
          backgroundColor: '$primary-normal',
        },

        '&:focus, &[data-state="checked"]': {
          boxShadow: '0px 0px 0px 3px rgba(206, 229, 255, 1)',
        },
      },

      secondary: {
        borderWidth: '$hairline',
        borderStyle: 'solid',
        borderColor: ' $secondary-normal',

        '&:hover': {
          borderColor: '$secondary-hover',
        },

        '&:active': {
          borderColor: '$secondary-active',
        },

        '&[data-state="checked"]': {
          backgroundColor: '$secondary-normal',
        },

        '&:focus, &[data-state="checked"]': {
          boxShadow: '0px 0px 0px 3px rgba(213, 228, 247, 1)',
        },
      },

      tertiary: {
        borderWidth: '$hairline',
        borderStyle: 'solid',
        borderColor: '$tertiary-normal',

        '&:hover': {
          borderColor: '$tertiary-hover',
        },

        '&:active': {
          borderColor: '$tertiary-active',
        },

        '&[data-state="checked"]': {
          backgroundColor: '$tertiary-normal',
        },

        '&:focus, &[data-state="checked"]': {
          boxShadow: '0px 0px 0px 3px rgba(238, 219, 255, 1)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: 'stretch',
  height: 'stretch',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="indeterminate"]': {
    '&::before': {
      content: `''`,
      display: 'block',
      background: '$primary-normal',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '8px',
      height: '2px',
      borderRadius: 'inherit',
    },
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
  variants: {
    size: {
      small: {
        width: 'stretch',
        height: 'stretch',
      },
      medium: {
        width: 'stretch',
        height: 'stretch',
      },
      large: {
        width: 'stretch',
        height: 'stretch',
      },
    },
    color: {
      primary: {
        '&[data-state="checked"]': {
          background: '$primary-normal',
        },
      },

      secondary: {
        '&[data-state="checked"]': {
          background: '$secondary-normal',
        },
      },

      tertiary: {
        '&[data-state="checked"]': {
          background: '$tertiary-normal',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
  },
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-normal',

  fontFamily: '$default',
  fontWeight: '$medium',
  '& > span': {
    fontSize: '$sm',
    color: '$secondary-light-active',
  },

  '& .isRequired': {
    color: '$feedback-error-normal',
  },
  variants: {
    size: {
      small: {
        fontSize: '$xxs',
      },
      medium: {
        fontSize: '$xs',
      },
      large: {
        fontSize: '$sm',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
  color: '$feedback-error-normal',
})
