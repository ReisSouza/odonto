import { TimePickerNew, TimePickerProps } from '@odonto-ui/core'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TimePicker',
  component: TimePickerNew,
  args: {
    defaultValue: '05:23',
    label: 'Horario',
  },
  argTypes: {},
} as Meta<TimePickerProps>

export const Default: StoryObj<TimePickerProps> = {
  args: {},
}
