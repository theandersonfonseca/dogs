import * as S from './styles'

import { ReactComponent as Logo } from '../../assets/dogs-footer.svg'

const Footer = () => (
  <S.Wrapper>
    <Logo />
    <S.Copyright>Dogs. Alguns direitos reservados.</S.Copyright>
  </S.Wrapper>
)

export default Footer
