import { WarningCircle } from 'phosphor-react'
import React, {
  forwardRef,
  ElementRef,
  useId,
  ReactNode,
  useState,
  ElementType,
} from 'react'

import { formatString, FormatStringType } from '@format-string/core'

import * as S from './styles'
import { VariantProps } from '@stitches/react'
import { CSS } from '@/types/css'

export type TextFieldProps = VariantProps<typeof S.WrappedInput> & {
  hint?: string
  label?: string
  htmlFor?: string
  iconLeft?: ReactNode
  isRequired?: boolean
  iconRight?: ReactNode
  hasIconHint?: boolean
  complementLabel?: string
  formatStringType?: FormatStringType
  fullWidth?: boolean
  defaultValue?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
  readOnly?: boolean
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
  placeholder?: string
  onChange?: (value: string | undefined) => void
  onPressIcon?: () => void
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  size?: 'small' | 'medium' | 'large'
  status?: 'default' | 'error' | 'warning' | 'success' | 'info'
  css?: CSS
  type?: 'text' | 'time' | 'date' | 'email' | 'password' | 'tel'
  as?: ElementType
}

export const TextField = forwardRef<ElementRef<typeof S.Input>, TextFieldProps>(
  (
    {
      iconLeft,
      iconRight,
      size = 'medium',
      label,
      css,
      hint,
      hasIconHint,
      complementLabel,
      isRequired = false,
      htmlFor,
      status,
      onClick,
      value,
      formatStringType,
      onInputChange,
      defaultValue,
      onChange,
      fullWidth,
      disabled,
      onPressIcon,
      as,
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    const generateDefaultValue = formatStringType
      ? formatString({ value: defaultValue, type: formatStringType })
      : defaultValue
    const [_value, setValue] = useState<string | undefined>(
      generateDefaultValue || '',
    )

    const id = useId()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let finalValue: string | undefined = ''

      if (formatStringType) {
        finalValue = formatString({
          type: formatStringType,
          value: e.target.value,
        })
      } else {
        finalValue = e.target.value
      }
      onChange && onChange(finalValue)
      setValue(finalValue)
      onInputChange && onInputChange(e)
    }
    return (
      <S.ContainedTextField css={css}>
        {label && (
          <S.Label disabled={disabled} size={size} htmlFor={htmlFor || id}>
            {label} <span>{complementLabel}</span>{' '}
            {isRequired && <span className="isRequired">*</span>}
          </S.Label>
        )}
        <S.WrappedInput size={size}>
          {iconLeft && iconLeft}
          <S.Input
            {...props}
            onClick={onClick}
            value={value || _value}
            onChange={handleChange}
            size={size}
            id={htmlFor || id}
            ref={ref}
          />
          {iconRight && iconRight}
        </S.WrappedInput>
        {hint && (
          <S.Hint>
            {hasIconHint && <WarningCircle size={24} />}
            {hint}
          </S.Hint>
        )}
      </S.ContainedTextField>
    )
  },
)

TextField.displayName = 'TextField'
