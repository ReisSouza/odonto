import React, { KeyboardEvent } from 'react'
import { useTimePickerContext } from './TimePickerContext'
export type UseAccessibilityType = {
  handleOutsideClick: (event: MouseEvent) => void
  handleKeyDownInput: (event: KeyboardEvent<HTMLInputElement>) => void
}
export const useAccessibility = (
  containerRef: React.RefObject<HTMLDivElement>,
): UseAccessibilityType => {
  const { setOpen } = useTimePickerContext()
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
  return { handleOutsideClick, handleKeyDownInput }
}
