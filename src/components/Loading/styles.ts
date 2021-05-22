import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Loading = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 8rem;
    height: 8rem;
    display: flex;
    padding-left: 0.5rem;
    background: ${theme.colors.LightGray};
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.circle};
  `}
`
