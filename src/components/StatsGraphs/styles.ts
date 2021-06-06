import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.medium};

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  `}
`

export const TotalWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    grid-column: 1/3;
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
      grid-column: auto;
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxxlarge};
  `}
`

export const Views = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xxxlarge};
  `}
`

export const GraphItem = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
