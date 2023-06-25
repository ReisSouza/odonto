import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { TextField, TextFieldProps } from '../TextField/TextField'
import { Clock } from 'phosphor-react'
import dayjs from 'dayjs'

export type TimePickerProps = TextFieldProps & {}

export const TimePickerNew: React.FC<TimePickerProps> = ({
  onChange,
  defaultValue = dayjs().add(10, 'hour').format('HH:mm'),
  ...rest
}: TimePickerProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState<string | undefined>(
    defaultValue || dayjs().format('HH:mm'),
  )
  const containerRef = useRef<HTMLDivElement>(null)

  const hours = Array.from(Array(24).keys())
  const minutes = Array.from(Array(60).keys())

  const hourButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from(Array(24)).map(() => null),
  )
  const minuteButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from(Array(60)).map(() => null),
  )

  const handleOpenTimePicker = () => {
    setOpen(true)
  }

  const initialHourIndex = Number(inputValue?.split(':')[0]) % 24
  const initialMinuteIndex = Number(inputValue?.split(':')[1]) % 60

  const [selectedHourIndex, setSelectedHourIndex] =
    useState<number>(initialHourIndex)
  const [selectedMinuteIndex, setSelectedMinuteIndex] =
    useState<number>(initialMinuteIndex)

  const [isInitialRender, setIsInitialRender] = useState(true)

  const [activeSelection, setActiveSelection] = useState<'hour' | 'minute'>(
    isInitialRender ? 'hour' : 'minute',
  )

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false)
    }
  }

  const handleKeyDownInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setOpen(true)
      event.preventDefault()
    }
  }

  const handleChange = (value: string | undefined) => {
    onChange && onChange(value)
    setInputValue(value || '')

    const [hour, minute] = (value || '').split(':')
    const hourIndex = Number(hour) % 24
    const minuteIndex = Number(minute) % 60

    setSelectedHourIndex(hourIndex)
    setSelectedMinuteIndex(minuteIndex)

    if (activeSelection === 'hour') {
      hourButtonsRef.current[hourIndex]?.focus()
    } else {
      minuteButtonsRef.current[minuteIndex]?.focus()
    }
  }

  const handleSelectHour = (hour: string, index: number) => {
    const selectedTime = `${hour}:${inputValue?.split(':')[1]}`
    setInputValue(selectedTime)
    onChange && onChange(selectedTime)
    setSelectedHourIndex(index)
    setActiveSelection('minute')
    setSelectedHourIndex(index)
  }

  const handleSelectMinute = (minute: string, index: number) => {
    const selectedTime = `${inputValue?.split(':')[0]}:${minute}`
    setInputValue(selectedTime)
    onChange && onChange(selectedTime)
    setSelectedMinuteIndex(index)
    setOpen(false)
  }

  useEffect(() => {
    setIsInitialRender(false)
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setActiveSelection('hour')
      setSelectedHourIndex(initialHourIndex)
      hourButtonsRef.current[initialHourIndex]?.focus()
    }
  }, [open])

  const handleKeyButton = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!open) return

    const isHourSelection = activeSelection === 'hour'
    const lastIndex = isHourSelection ? hours.length - 1 : minutes.length - 1

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        if (isHourSelection) {
          const prevHourIndex =
            selectedHourIndex === 0 ? lastIndex : selectedHourIndex - 1
          setSelectedHourIndex(prevHourIndex)
          hourButtonsRef.current[prevHourIndex]?.focus()
          const newTime = `${hours[prevHourIndex]
            .toString()
            .padStart(2, '0')}:${inputValue?.split(':')[1]}`
          setInputValue(newTime)
          onChange && onChange(newTime)
        } else {
          const prevMinuteIndex =
            selectedMinuteIndex === 0 ? lastIndex : selectedMinuteIndex - 1
          setSelectedMinuteIndex(prevMinuteIndex)
          minuteButtonsRef.current[prevMinuteIndex]?.focus()
          const newTime = `${inputValue?.split(':')[0]}:${minutes[
            prevMinuteIndex
          ]
            .toString()
            .padStart(2, '0')}`
          setInputValue(newTime)
          onChange && onChange(newTime)
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if (isHourSelection) {
          const nextHourIndex =
            selectedHourIndex === lastIndex ? 0 : selectedHourIndex + 1
          setSelectedHourIndex(nextHourIndex)
          hourButtonsRef.current[nextHourIndex]?.focus()
          const newTime = `${hours[nextHourIndex]
            .toString()
            .padStart(2, '0')}:${inputValue?.split(':')[1]}`
          setInputValue(newTime)
          onChange && onChange(newTime)
        } else {
          const nextMinuteIndex =
            selectedMinuteIndex === lastIndex ? 0 : selectedMinuteIndex + 1
          setSelectedMinuteIndex(nextMinuteIndex)
          minuteButtonsRef.current[nextMinuteIndex]?.focus()
          const newTime = `${inputValue?.split(':')[0]}:${minutes[
            nextMinuteIndex
          ]
            .toString()
            .padStart(2, '0')}`
          setInputValue(newTime)
          onChange && onChange(newTime)
        }
        break
      case 'Tab':
      case 'ArrowRight':
      case 'ArrowLeft':
        e.preventDefault()
        if (e.key === 'ArrowRight') {
          setActiveSelection('minute')
          minuteButtonsRef.current[selectedMinuteIndex]?.focus()
        }
        if (e.key === 'ArrowLeft') {
          setActiveSelection('hour')
          hourButtonsRef.current[selectedHourIndex]?.focus()
        }
        if (e.key === 'Tab' && activeSelection === 'minute') {
          setActiveSelection('hour')
          hourButtonsRef.current[selectedHourIndex]?.focus()
        }
        if (e.key === 'Tab' && activeSelection === 'hour') {
          setActiveSelection('minute')
          minuteButtonsRef.current[selectedMinuteIndex]?.focus()
        }
        break
      case 'Enter':
        e.preventDefault()
        if (isHourSelection) {
          setActiveSelection('minute')
          minuteButtonsRef.current[selectedMinuteIndex]?.focus()
        } else {
          setOpen(false)
        }
        break
      case 'Escape':
        setOpen(false)
        break
      default:
        break
    }
  }

  return (
    <S.TimePickerContainer ref={containerRef}>
      <TextField
        {...rest}
        value={rest.value || inputValue}
        defaultValue={defaultValue}
        type="time"
        iconRight={<Clock size={24} onClick={handleOpenTimePicker} />}
        onChange={handleChange}
        onKeyDown={handleKeyDownInput}
      />

      <S.DropdownContainer open={open}>
        <S.WrappedButtons>
          {hours.map((hour, index) => {
            const hourString = hour.toString().padStart(2, '0')
            const isActive = inputValue?.split(':')[0] === hourString

            return (
              <S.ButtonHour
                active={isActive}
                key={index}
                className="button-hour"
                ref={(el) => (hourButtonsRef.current[index] = el)}
                onClick={() => handleSelectHour(hourString, index)}
                onKeyDown={(e) => handleKeyButton(e)}
              >
                {hourString}
              </S.ButtonHour>
            )
          })}
        </S.WrappedButtons>
        <S.WrappedButtons>
          {minutes.map((minute, index) => {
            const minuteString = minute.toString().padStart(2, '0')
            const isActive = inputValue?.split(':')[1] === minuteString
            return (
              <S.ButtonMinute
                active={isActive}
                key={index}
                onClick={() => handleSelectMinute(minuteString, index)}
                ref={(el) => (minuteButtonsRef.current[index] = el)}
                className="button-minute"
                onKeyDown={(e) => handleKeyButton(e)}
              >
                {minuteString}
              </S.ButtonMinute>
            )
          })}
        </S.WrappedButtons>
      </S.DropdownContainer>
    </S.TimePickerContainer>
  )
}
