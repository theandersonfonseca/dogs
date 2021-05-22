import * as S from './styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Header />
    {children}
    <Footer />
  </S.Wrapper>
)

export default Base
