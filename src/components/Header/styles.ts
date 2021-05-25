import styled, { css } from 'styled-components'

import userIcon from '../../assets/usuario.svg'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 6.5rem;
    border-bottom: 0.2rem solid ${theme.colors.LightGray};
    background: ${theme.colors.white};
    z-index: ${theme.layers.menu};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${theme.spacings.large};
  `}
`

export const LoginButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    background: transparent;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: inline-block;
      width: 2rem;
      height: 2rem;
      margin-left: ${theme.spacings.xxsmall};
      background: url(${userIcon}) no-repeat center;
    }
  `}
`
