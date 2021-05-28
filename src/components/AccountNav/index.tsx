import { useState } from 'react'
import * as S from './styles'

import { tokenActions } from '../../store/token'
import { userActions } from '../../store/user'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import { ReactComponent as ProfileIcon } from '../../assets/feed.svg'
import { ReactComponent as StatsIcon } from '../../assets/estatisticas.svg'
import { ReactComponent as AddImageIcon } from '../../assets/adicionar.svg'
import { ReactComponent as LogoutIcon } from '../../assets/sair.svg'

type AccountNavProps = {
  id: string
}

const AccountNav = ({ id }: AccountNavProps) => {
  const dispatch = useDispatch()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')

    dispatch(tokenActions.resetToken())
    dispatch(userActions.resetUser())
  }

  const handleMobileMenu = () => {
    setOpenMobileMenu((oldValue) => {
      return !oldValue
    })
  }

  return (
    <>
      <S.Wrapper className={openMobileMenu ? 'showMobileMenu' : ''}>
        <Link to="/conta">
          <S.Icon className={id === 'account' ? 'active' : ''}>
            <ProfileIcon />
          </S.Icon>
          <S.DescriptionMenu>Minha Conta</S.DescriptionMenu>
        </Link>

        <Link to="/conta/estatisticas">
          <S.Icon className={id === 'stats' ? 'active' : ''}>
            <StatsIcon />
          </S.Icon>
          <S.DescriptionMenu>Estatísticas</S.DescriptionMenu>
        </Link>

        <Link to="/conta/postar">
          <S.Icon className={id === 'photoPost' ? 'active' : ''}>
            <AddImageIcon />
          </S.Icon>
          <S.DescriptionMenu>Adicionar Foto</S.DescriptionMenu>
        </Link>

        <Link to="/login" onClick={logout}>
          <S.Icon>
            <LogoutIcon />
          </S.Icon>
          <S.DescriptionMenu>Sair</S.DescriptionMenu>
        </Link>
      </S.Wrapper>

      <S.MobileButton
        onClick={handleMobileMenu}
        className={openMobileMenu ? 'selected' : ''}
      >
        <S.Line />
      </S.MobileButton>
    </>
  )
}

export default AccountNav
