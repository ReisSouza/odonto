export const base = {
  align: {
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
    center: {
      textAlign: 'center',
    },
  },
  textTransform: {
    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
  },
  bt: {
    true: {
      borderTopWidth: '$thin',
      borderTopStyle: 'solid',
    },
  },
  bb: {
    true: {
      borderBottomWidth: '$thin',
      borderBottomStyle: 'solid',
    },
  },
  bl: {
    true: {
      borderLeftWidth: '$thin',
      borderLeftStyle: 'solid',
    },
  },
  br: {
    true: {
      borderRightWidth: '$thin',
      borderRightStyle: 'solid',
    },
  },
  b: {
    true: {
      borderWidth: '$hairline',
      borderStyle: 'solid',
    },
  },
  bColor: {
    text: {
      borderColor: '$text',
    },
    primary: {
      borderColor: '$primary-normal',
    },
    secondary: {
      borderColor: '$secondary-normal',
    },
    danger: {
      borderColor: '$feedback-error-normal',
    },
    success: {
      borderColor: '$feedback-success-normal',
    },
    warning: {
      borderColor: '$feedback-help-normal',
    },
  },
}
