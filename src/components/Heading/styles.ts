import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      left: -0.5rem;
      bottom: 1.5rem;
      background: ${theme.colors.primary};
      border-radius: ${theme.border.radius};
      z-index: -1;
    }

    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.xxxlarge};

      &::before {
        width: 1.4rem;
        height: 1.4rem;
        bottom: 1.2rem;
      }
    }
  `}
`
