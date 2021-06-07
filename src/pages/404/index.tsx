import * as S from './styles'

import { Helmet } from 'react-helmet-async'

import PageBase from '../../templates/PageBase'
import Heading from '../../components/Heading'
import Container from '../../components/Container'

const Page404 = () => (
  <>
    <Helmet>
      <title>404 | Dogs</title>
    </Helmet>

    <PageBase>
      <Container>
        <Heading>Erro 404</Heading>
        <S.Text>Página não encontrada.</S.Text>
      </Container>
    </PageBase>
  </>
)

export default Page404
