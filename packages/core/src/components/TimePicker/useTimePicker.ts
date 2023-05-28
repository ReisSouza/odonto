import React, { useRef } from 'react'
import {
  TimePickerContextType,
  useTimePickerContext,
} from './TimePickerContext'

export type UseTimePickerProps = TimePickerContextType & {
  handleOpenTimePicker: () => void
  open: boolean
  hours: number[]
  minutes: number[]
  hourButtonsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>
  minuteButtonsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>
}

export const useTimePicker = (): UseTimePickerProps => {
  const {
    setOpen,
    open,
    inputValue,
    setInputValue,
    activeSelection,
    selectedHourIndex,
    selectedMinuteIndex,
    setActiveSelection,
    setSelectedHourIndex,
    setSelectedMinuteIndex,
  } = useTimePickerContext()
  const handleOpenTimePicker = () => {
    setOpen(true)
  }

  const hours = Array.from(Array(24).keys())
  const minutes = Array.from(Array(60).keys())

  const hourButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from(Array(24)).map(() => null),
  )
  const minuteButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from(Array(60)).map(() => null),
  )

  return {
    handleOpenTimePicker,
    open,
    hours,
    minutes,
    inputValue,
    setInputValue,
    activeSelection,
    selectedHourIndex,
    selectedMinuteIndex,
    setActiveSelection,
    setSelectedHourIndex,
    setSelectedMinuteIndex,
    hourButtonsRef,
    minuteButtonsRef,
    setOpen,
  }
}
