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

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.red};
    margin-top: ${theme.spacings.medium};
  `}
`
