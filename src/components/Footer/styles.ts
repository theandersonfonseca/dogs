import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 16rem;
    background: ${theme.colors.primary};
  `}
`
export const Copyright = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary};
  `}
`
