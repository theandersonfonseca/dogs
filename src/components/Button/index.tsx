import { HTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes = HTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  size?: 'medium' | 'small'
  disabled?: boolean
} & ButtonTypes

const Button = ({
  children,
  type = 'button',
  size = 'medium',
  disabled = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper {...props} type={type} disabled={disabled} size={size}>
    {children}
  </S.Wrapper>
)

export default Button
