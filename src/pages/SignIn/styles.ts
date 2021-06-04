import styled, { css } from 'styled-components'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    label {
      margin-top: ${theme.spacings.xxsmall};
    }

    input {
      margin-top: 0.5rem;
    }

    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const ForgotPasswordLink = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    border-bottom: solid 0.2rem ${theme.colors.gray};
    margin-top: ${theme.spacings.large};
  `}
`

export const SignUpCallWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 8rem;

    a {
      display: inline-block;
    }

    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const SignUpCallTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 5rem;
      height: 0.8rem;
      background: ${theme.colors.LightGray};
      border-radius: ${theme.border.radius};
    }
  `}
`

export const SignUpCallText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.red};
    margin-top: ${theme.spacings.medium};
  `}
`
