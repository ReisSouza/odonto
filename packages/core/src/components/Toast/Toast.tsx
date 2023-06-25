import { WarningCircle, X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import React, { ReactNode } from 'react'

import * as S from './styles'
import { VariantProps } from '@stitches/react'

export type ToastProps = VariantProps<typeof S.Root> &
  Pick<
    ToastPrimitive.ToastProps,
    | 'asChild'
    | 'type'
    | 'duration'
    | 'defaultOpen'
    | 'open'
    | 'onOpenChange'
    | 'onEscapeKeyDown'
    | 'onSwipeEnd'
    | 'forceMount'
  > & {
    title: ReactNode
    description: ReactNode
  }

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  variant,
  ...rest
}: ToastProps) => {
  return (
    <>
      <S.Root {...rest}>
        <S.Section variant={variant}>
          <WarningCircle size={36} />
          <S.WrappedContent>
            {title && <S.Title>{title}</S.Title>}
            {description && <S.Description>{description}</S.Description>}
          </S.WrappedContent>
        </S.Section>
        <S.Close>
          <X size={24} />
        </S.Close>
      </S.Root>
    </>
  )
}

export const ToastProvider: React.FC<ToastPrimitive.ToastProviderProps> = ({
  children,
  ...rest
}) => {
  return (
    <ToastPrimitive.ToastProvider {...rest}>
      {children}
      <S.Viewport />
    </ToastPrimitive.ToastProvider>
  )
}
