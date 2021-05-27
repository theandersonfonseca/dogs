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

export const Msg = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
