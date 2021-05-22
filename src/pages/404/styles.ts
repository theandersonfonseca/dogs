import styled, { css } from 'styled-components'

export const Text = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
