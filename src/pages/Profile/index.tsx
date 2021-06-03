import * as S from './styles'

import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

import PageBase from '../../templates/PageBase'
import Heading from '../../components/Heading'
import Container from '../../components/Container'
import Feed from '../../components/Feed'

const Profile = () => {
  const { user } = useParams<{ user?: string }>()

  return (
    <>
      <Helmet>
        <title>{`${user} | Dogs`}</title>
      </Helmet>

      <PageBase>
        <Container>
          <Heading>{user}</Heading>

          <S.Wrapper>
            <Feed user={user} />
          </S.Wrapper>
        </Container>
      </PageBase>
    </>
  )
}

export default Profile
