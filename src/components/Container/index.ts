import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    width: 100%;
    padding: ${theme.spacings.xsmall};
    margin: 0 auto;
  `}
`

export default Container
