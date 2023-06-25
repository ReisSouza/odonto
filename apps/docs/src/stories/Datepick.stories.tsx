import { Box, DatePicker, DatePickerProps } from '@odonto-ui/core'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Datepicker',
  component: DatePicker,

  args: {
    defaultValue: '1995-08-04',
    label: 'Data da consulta',
  },
  decorators: [
    (Story) => {
      return (
        <>
          <Box as="div" css={{ minHeight: '400px' }}>
            {Story()}
          </Box>
        </>
      )
    },
  ],
  argTypes: {},
} as Meta<DatePickerProps>

export const Primary: StoryObj<DatePickerProps> = {
  args: {},
}
