import styled, { css, keyframes } from 'styled-components'

const photosAnimation = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`
export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.xsmall};
    margin-bottom: 8rem;

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`

export const PhotoWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    opacity: 0;
    transform: translateX(-2rem);
    animation: ${photosAnimation} 0.3s forwards;

    svg {
      margin-right: ${theme.spacings.xxsmall};
    }

    img {
      border-radius: ${theme.border.radius};
    }

    &:nth-child(6n + 2) {
      grid-column: 2/4;
      grid-row: span 2;

      @media (max-width: 600px) {
        grid-column: auto;
        grid-row: auto;
      }
    }
  `}
`

export const Overlay = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    background: rgba(0, 0, 0, 0.4);
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    transition: ${theme.transition.fast};

    &:hover {
      opacity: 1;
    }
  `}
`
