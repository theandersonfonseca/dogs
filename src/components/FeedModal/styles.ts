import styled, { css, keyframes } from 'styled-components'

const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${theme.spacings.medium};
    background: rgba(0, 0, 0, 0.2);
    z-index: ${theme.layers.alwaysOnTop};

    @media (max-width: 1000px) {
      padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    width: 90rem;
    height: 58rem;
    opacity: 0;
    transform: scale(0.8);
    animation: ${scaleUp} 0.3s forwards;

    h1 {
      z-index: ${theme.layers.base};
      color: ${theme.colors.black};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      height: 100%;
      width: 64rem;
      overflow-y: scroll;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    min-width: 35%;
    padding: ${theme.spacings.medium};
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;

    form {
      margin-top: ${theme.spacings.medium};
    }

    @media (max-width: 1000px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      padding: ${theme.spacings.xsmall};
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

export const PhotoViews = styled.span``

export const DogInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const DogWeight = styled.span``

export const DogAge = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const Coments = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.medium};
    overflow-y: scroll;
    flex: 1;

    @media (max-width: 1000px) {
      overflow-y: visible;
    }
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

export const DeletePhoto = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    background: ${theme.colors.LightGray};
    padding: 0.4rem ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    border: 0.1rem solid transparent;
    transition: ${theme.transition.fast};

    &:hover {
      background: ${theme.colors.white};
      border: 0.1rem solid ${theme.colors.gray};
    }
  `}
`
