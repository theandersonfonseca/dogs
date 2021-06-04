import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  `}
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    flex: 1;
    max-width: 100%;

    label {
      margin-top: ${theme.spacings.xxsmall};
    }

    input::not(:last-child) {
      margin-top: 0.5rem;
    }

    button {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const InputFile = styled.input`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    display: block;
    max-width: 100%;
  `}
`

export const Preview = styled.img`
  ${({ theme }) => css`
    flex: 1;
    max-width: 37rem;
    width: 100%;
    object-fit: cover;
    border-radius: ${theme.border.radius};
    margin-left: ${theme.spacings.xxlarge};

    @media (max-width: 650px) {
      margin-left: 0;
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.red};
  `}
`
