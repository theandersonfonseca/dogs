import styled, { css } from 'styled-components'

export const FormComment = styled.form`
  display: flex;
  justify-content: space-between;
`

export const TextAreaComment = styled.textarea`
  ${({ theme }) => css`
    resize: none;
    display: block;
    width: 100%;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.LightGray};
    border: solid 0.1rem transparent;
    transition: ${theme.transition.fast};
    font-size: ${theme.font.sizes.medium};

    @media (max-width: 1000px) {
      width: 100%;
    }

    &:hover,
    &:focus {
      border: solid 0.1rem ${theme.colors.primary};
      box-shadow: 0 0 0 0.3rem ${theme.colors.lightYellow};
      background: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      outline: none;
    }
  `}
`

export const ButtonComment = styled.button`
  ${({ theme }) => css`
    background: transparent;
    transition: ${theme.transition.fast};
    margin-left: ${theme.spacings.xsmall};

    &:hover,
    &:focus {
      svg > *,
      svg g > * {
        fill: ${theme.colors.primary};
      }
    }
  `}
`
