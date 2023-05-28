import {
  TimePickerNew,
  TimePickerProps,
  TimePickerProvider,
} from '@odonto-ui/core'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TimePicker',
  component: TimePickerNew,
  args: {
    defaultValue: '05:23',
  },
  argTypes: {},
  decorators: [
    (Story, args) => {
      return <TimePickerProvider>{Story()}</TimePickerProvider>
    },
  ],
} as Meta<TimePickerProps>

export const Default: StoryObj<TimePickerProps> = {
  args: {},
}
