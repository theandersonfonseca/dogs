import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    padding: ${theme.spacings.xsmall};
    margin: 0 auto;
  `}
`

export default Container
