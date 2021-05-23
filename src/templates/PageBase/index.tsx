import * as S from './styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

type PageBaseProps = {
  children: React.ReactNode
}

const PageBase = ({ children }: PageBaseProps) => (
  <S.Wrapper>
    <Header />
    {children}
    <Footer />
  </S.Wrapper>
)

export default PageBase
