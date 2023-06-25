import { keyframes, styled } from '@/styles'

export const ThreadContainer = styled('thead', {
  borderBottomColor: '$border',
  borderBottomWidth: '$thin',
  borderBottomStyle: 'solid',
  '& tr ': {
    borderCollapse: 'collapse',
  },
  '& th': {},
})

export const WrappedContentTh = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
})

export const WrappedAscAndDesc = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const WrappedCheckbox = styled('th', {
  width: '40px !important',

  '& > div': {
    padding: '$4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Th = styled('th', {
  padding: '$2 $4',
  borderCollapse: 'collapse',

  variants: {
    hasSort: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          color: '$secondary-hover',
        },
      },
    },
    active: {
      true: {
        color: '$secondary-active',
      },
    },
  },
  defaultVariants: {
    hasSort: true,
  },
})

export const Options = styled('th', {
  width: '$20',
  '& div': {
    padding: '0 $4',

    display: 'flex',
    justifyContent: 'center',
  },
})

const barAnimation = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
})

export const BarLoader = styled('div', {
  width: '100%',
  height: '4px',
  backgroundColor:
    'linear-gradient(to right, $colors$primary-light-active, $colors$tertiary-light-active)',
  borderRadius: '2px',
  overflow: 'hidden',
})

export const Bar = styled('div', {
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(to right, $colors$primary-light-active, $colors$tertiary-light-active)',
  position: 'relative',
  animation: `${barAnimation} 3s infinite linear`,
})
