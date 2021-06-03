import styled, { css, keyframes } from 'styled-components'

const mobileMenuAnimation = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;

    a {
      display: flex;
      align-items: center;
      padding: 0.1rem;
      cursor: pointer;

      @media (max-width: 600px) {
        &:hover {
          svg > * {
            fill: ${theme.colors.primary};
          }
        }
      }
    }

    a:not(:last-child) {
      margin-right: ${theme.spacings.xsmall};

      @media (max-width: 600px) {
        border-bottom: solid 0.1rem ${theme.colors.LightGray};
      }
    }

    @media (max-width: 600px) {
      opacity: 0;
      pointer-events: none;
      position: absolute;
      bottom: -19rem;
      right: 0;
      padding: ${theme.spacings.xxsmall};
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
      flex-direction: column;
      border-radius: ${theme.border.radius};
      z-index: ${theme.layers.menu};
      background: ${theme.colors.white};

      &.showMobileMenu {
        animation: ${mobileMenuAnimation} 0.3s forwards;
        pointer-events: auto;
      }
    }
  `}
`

export const Icon = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.LightGray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid transparent;
    transition: ${theme.transition.fast};
    cursor: pointer;

    @media (max-width: 600px) {
      background: transparent;
    }

    &:hover {
      background-color: ${theme.colors.white};
      border: 0.1rem solid ${theme.colors.black};

      @media (max-width: 600px) {
        border: 0.1rem solid transparent;

        svg > * {
          fill: ${theme.colors.primary};
        }
      }
    }

    &.active {
      background-color: ${theme.colors.white};
      border: 0.1rem solid ${theme.colors.primary};
      box-shadow: 0 0 0 0.3rem ${theme.colors.lightYellow};
      color: ${theme.colors.primary};

      svg > * {
        fill: ${theme.colors.primary};
      }

      @media (max-width: 600px) {
        border: 0.1rem solid transparent;
        box-shadow: initial;
        }
      }
    }
  `}
`

export const MobileButton = styled(Icon)`
  ${({ theme }) => css`
    display: none;
    background: ${theme.colors.LightGray};

    &:hover,
    &.selected {
      border: 0.1rem solid ${theme.colors.primary};
      background: ${theme.colors.white};

      span,
      span::before,
      span::after {
        background: ${theme.colors.primary};
      }
    }

    @media (max-width: 600px) {
      margin-left: ${theme.spacings.medium};
      display: flex;
    }
  `}
`

export const DescriptionMenu = styled.p`
  ${({ theme }) => css`
    display: none;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    margin-left: ${theme.spacings.xxsmall};

    @media (max-width: 600px) {
      display: flex;
    }
  `}
`

export const Line = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    width: 100%;
    height: 0.2rem;
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: ${theme.colors.black};
    }

    &::before {
      top: -0.6rem;
    }

    &::after {
      bottom: -0.6rem;
    }
  `}
`
