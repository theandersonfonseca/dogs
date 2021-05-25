import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'

const IsAuth = () => {
  const userState = useSelector((state: RootState) => state.user)

  const isAuth = !!userState.name

  return isAuth
}

export default IsAuth
