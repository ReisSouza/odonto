import { TimePicker, TimePickerProps } from '@odonto-ui/core'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TimePicker',
  component: TimePicker,
  args: {},
  argTypes: {},
} as Meta<TimePickerProps>

export const Default: StoryObj<TimePickerProps> = {
  args: {},
}
