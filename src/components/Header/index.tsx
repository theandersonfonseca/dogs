import * as S from './styles'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'
import IsAuth from '../../helpers/isAuth'

import { ReactComponent as Logo } from '../../assets/dogs.svg'

import Container from '../Container'

const Header = () => {
  const userState = useSelector((state: RootState) => state.user)

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Link to="/">
            <Logo />
          </Link>

          {IsAuth() ? (
            <Link to="/conta">
              <S.LoginButton>{userState.name}</S.LoginButton>
            </Link>
          ) : (
            <Link to="/login">
              <S.LoginButton>Login / Criar</S.LoginButton>
            </Link>
          )}
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Header
