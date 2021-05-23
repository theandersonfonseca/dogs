import styled, { keyframes } from 'styled-components'

import image from '../../assets/login.jpg'

const wrapperAnimation = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const Image = styled.div`
  background: url(${image}) no-repeat 50%;
  background-size: cover;

  @media (max-width: 650px) {
    display: none;
  }
`

export const ContentSection = styled.section`
  padding: 20rem 1.5rem 0 5rem;
  opacity: 0;
  transform: translateX(-2rem);
  animation: ${wrapperAnimation} 0.3s forwards;

  @media (max-width: 650px) {
    padding: 3rem 1.5rem;
  }
`
