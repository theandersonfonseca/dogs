import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const GraphWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
