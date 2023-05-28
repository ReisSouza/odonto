import dayjs from 'dayjs'
import React, { createContext, ReactNode, useContext, useState } from 'react'

type TimePickerProviderProps = {
  children: ReactNode
  defaultValue?: string
}

export type TimePickerContextType = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>
  setActiveSelection: React.Dispatch<React.SetStateAction<'hour' | 'minute'>>
  setSelectedHourIndex: React.Dispatch<React.SetStateAction<number>>
  setSelectedMinuteIndex: React.Dispatch<React.SetStateAction<number>>
  selectedMinuteIndex: number
  selectedHourIndex: number
  activeSelection: 'hour' | 'minute'
  open: boolean
  inputValue: string | undefined
}

export const TimePickerContext = createContext<TimePickerContextType | null>(
  null,
)

export const TimePickerProvider = ({
  children,
  defaultValue,
}: TimePickerProviderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [activeSelection, setActiveSelection] = useState<'hour' | 'minute'>(
    'hour',
  )
  const [inputValue, setInputValue] = useState<string | undefined>(
    defaultValue || dayjs().format('HH:mm'),
  )

  const initialHourIndex = Number(inputValue?.split(':')[0]) % 24
  const initialMinuteIndex = Number(inputValue?.split(':')[1]) % 60

  const [selectedHourIndex, setSelectedHourIndex] =
    useState<number>(initialHourIndex)
  const [selectedMinuteIndex, setSelectedMinuteIndex] =
    useState<number>(initialMinuteIndex)

  return (
    <TimePickerContext.Provider
      value={{
        open,
        selectedHourIndex,
        selectedMinuteIndex,
        setSelectedHourIndex,
        setSelectedMinuteIndex,
        setOpen,
        inputValue,
        setInputValue,
        activeSelection,
        setActiveSelection,
      }}
    >
      {children}
    </TimePickerContext.Provider>
  )
}

export const useTimePickerContext = () =>
  useContext(TimePickerContext) as TimePickerContextType
