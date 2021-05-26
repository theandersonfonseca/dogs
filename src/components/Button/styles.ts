import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: 1rem ${theme.spacings.large};
    width: 15rem;
    display: flex;
    justify-content: center;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    width: 12rem;
    display: flex;
    justify-content: center;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    display: block;
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    transition: ${theme.transition.fast};

    &:hover,
    &:focus {
      box-shadow: 0 0 0 0.3rem ${theme.colors.lightYellow},
        0 0 0 0.4rem ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
