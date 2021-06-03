import * as S from './styles'

import { Helmet } from 'react-helmet'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'

import PageBase from '../../templates/PageBase'
import Heading from '../../components/Heading'
import Container from '../../components/Container'
import AccountNav from '../../components/AccountNav'
import Feed from '../../components/Feed'

const Account = () => {
  const userState = useSelector((state: RootState) => state.user)

  return (
    <>
      <Helmet>
        <title>Minha Conta | Dogs</title>
      </Helmet>

      <PageBase>
        <Container>
          <S.Wrapper>
            <Heading>Minha Conta</Heading>

            <AccountNav id="account" />
          </S.Wrapper>

          <S.Content>
            <Feed user={userState.username} />
          </S.Content>
        </Container>
      </PageBase>
    </>
  )
}

export default Account
