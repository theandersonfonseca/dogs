import * as S from './styles'

import { Helmet } from 'react-helmet'

import PageBase from '../../templates/PageBase'
import Container from '../../components/Container'
import Feed from '../../components/Feed'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fotos | Dogs</title>
      </Helmet>

      <PageBase>
        <Container>
          <Feed />
        </Container>
      </PageBase>
    </>
  )
}

export default Home
