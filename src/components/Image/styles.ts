import styled, { css, keyframes } from 'styled-components'

const skeleton = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 1;
  transition: 0.2s;

  &.skeleton {
    opacity: 0;
  }
`

export const Skeleton = styled.div`
  ${({ theme }) => css`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      ${theme.colors.LightGray} 0,
      ${theme.colors.white} 50%,
      ${theme.colors.LightGray} 100%
    );
    background-color: ${theme.colors.LightGray};
    background-size: 200%;
    animation: ${skeleton} 1.5s infinite linear;
  `}
`
