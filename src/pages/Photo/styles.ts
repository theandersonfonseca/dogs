import styled, { css, keyframes } from 'styled-components'

const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

export const Wrapper = styled.main`
  ${({ theme }) => css`
    opacity: 0;
    transform: scale(0.8);
    animation: ${scaleUp} 0.3s forwards;

    img {
      border-radius: ${theme.border.radius};
      width: 100%;
      height: 100%;
    }

    form {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const PhotoInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.xxsmall};

    svg {
      fill: ${theme.colors.gray};
      width: 3rem;
    }
  `}
`

export const PhotoUsername = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};

    &:hover {
      text-decoration: underline;
    }
  `}
`

export const PhotoViews = styled.span`
  ${({ theme }) => css``}
`

export const DogInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const DogWeight = styled.span`
  ${({ theme }) => css``}
`

export const DogAge = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const Coments = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.medium};
  `}
`

export const Coment = styled.span`
  ${({ theme }) => css`
    display: block;

    b {
      margin-right: ${theme.spacings.xxsmall};
    }

    &:not(:first-child) {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`
