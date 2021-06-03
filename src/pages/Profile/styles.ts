import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    main {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`
