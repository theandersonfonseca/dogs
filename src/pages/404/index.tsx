import * as S from './styles'

import Base from '../../templates/Base'
import Heading from '../../components/Heading'
import Container from '../../components/Container'

const Page404 = () => (
  <Base>
    <Container>
      <Heading>Erro 404</Heading>
      <S.Text>Página não encontrada.</S.Text>
    </Container>
  </Base>
)

export default Page404
