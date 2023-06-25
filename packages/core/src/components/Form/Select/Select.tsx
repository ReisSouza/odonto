import React, {
  ElementRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react'

import * as S from './styles'
import ItemList from '@/components/ItemList/ItemList'
import { CaretDown } from 'phosphor-react'
import { TextField, TextFieldProps } from '../TextField/TextField'

export type SelectItemProps = {
  label: string
  value?: string
  disabled?: boolean
  labelGroup?: string
  group?: {
    disabled?: boolean
    label: string
    value: string
  }[]
}

export type SelectProps = TextFieldProps & {
  options: SelectItemProps[]
  onChange?: (value?: string) => void
}

export const Select = forwardRef<ElementRef<typeof S.Input>, SelectProps>(
  (
    {
      css,
      htmlFor,
      value,
      onInputChange,
      defaultValue,
      onChange,
      options,
      ...rest
    }: SelectProps,
    ref,
  ) => {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
      defaultValue,
    )

    const handleOpen = () => {
      setOpen(true)
    }

    const handleCLick = (valueSelected?: string) => {
      setSelectedValue(valueSelected)
      if (onChange) onChange(valueSelected)
      setOpen(false)
    }

    const someOptions = [{ label: 'Selecione', value: undefined }, ...options]

    const valueInput = someOptions.find(
      (option) => option.value === (value || selectedValue),
    )?.label

    const useClickBody = useCallback(
      (event: any) => {
        if (!event.target.closest('.meu-elemento')) {
          setOpen(false)
        }
      },
      [setOpen],
    )

    useEffect(() => {
      document.addEventListener('click', useClickBody)

      return () => {
        document.removeEventListener('click', useClickBody)
      }
    }, [useClickBody])

    return (
      <S.SelectContainer css={css} className="meu-elemento">
        <TextField
          onClick={handleOpen}
          css={{
            svg: {
              transition: 'all 250ms ease-in-out',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            },
          }}
          {...rest}
          iconRight={
            <CaretDown
              weight="bold"
              size={16}
              onClick={() => {
                console.log('Clique')
                setOpen(!open)
              }}
            />
          }
          readOnly
          value={valueInput}
        />
        <S.DropdownContainer open={open}>
          {someOptions
            .filter((someOptionsFilter) => {
              if (selectedValue === undefined) {
                return someOptionsFilter.value !== undefined
              } else {
                return someOptionsFilter
              }
            })
            .map((option, index) => {
              return (
                <ItemList
                  key={index}
                  label={option.label}
                  active={option.value === selectedValue}
                  onClick={() => {
                    handleCLick(option.value)
                    setOpen(!open)
                  }}
                />
              )
            })}
        </S.DropdownContainer>
      </S.SelectContainer>
    )
  },
)

Select.displayName = 'Select'
