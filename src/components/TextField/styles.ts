import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    max-width: 45rem;
    width: 100%;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.LightGray};
    font-size: ${theme.font.sizes.medium};
    border: 0.1rem solid transparent;
    transition: ${theme.transition.fast};

    &:focus,
    &:hover {
      outline: none;
      border-color: ${theme.colors.primary};
      background: ${theme.colors.white};
      box-shadow: 0 0 0 0.3rem ${theme.colors.lightYellow};
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.red};
  `}
`
