import { styled } from '@/styles'
import { keyframes } from '@stitches/react'

const slideDownAndFadeOpen = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})
const slideDownAndFadeClosed = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-2px)' },
})

export const TimePickerContainer = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '100%',

  input: {
    appearance: 'none',
    '&::-webkit-calendar-picker-indicator': {
      display: 'none',
    },
  },
})

export const DropdownContainer = styled('div', {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  marginTop: '4px',
  minWidth: '200px',
  maxWidth: '200px',
  padding: '8px',
  paddingRight: '0px',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  gridTemplateColumns: '1fr 1fr',
  height: '300px',
  variants: {
    open: {
      true: {
        display: 'grid',
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

export const WrappedButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  overflowY: 'auto',
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$secondary-active',
  '&::-webkit-scrollbar': {
    width: '12px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$white',
    width: '6px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$secondary-light-active',
    borderRadius: '$pill',
    border: '3px solid $colors$white',
  },
})

export const ButtonHour = styled('button', {
  all: 'unset',
  zIndex: 99999,
  aspectRatio: '1 / 1',
  padding: '$1',
  textAlign: 'center',
  background: '$background',
  borderRadius: '$1',

  '&:hover': {
    background: '$secondary-light-hover',
  },

  '&:not(:disabled):hover': {
    background: '#E9EBF8',
  },
  variants: {
    active: {
      true: {
        background: '$secondary-light-active',
      },
    },
  },
  '&:focus': {
    boxShadow: '0px 0px 0px 2px rgba(206, 229, 255, 1)',
  },
})

export const ButtonMinute = styled('button', {
  all: 'unset',
  zIndex: 99999,
  aspectRatio: '1 / 1',
  padding: '$1',
  textAlign: 'center',
  background: '$background',
  borderRadius: '$1',

  '&:hover': {
    background: '$secondary-light-hover',
  },

  '&:not(:disabled):hover': {
    background: '#E9EBF8',
  },
  variants: {
    active: {
      true: {
        background: '$secondary-light-active',
      },
    },
  },
  '&:focus': {
    boxShadow: '0px 0px 0px 2px rgba(206, 229, 255, 1)',
  },
})
