import { Route, Switch } from 'react-router-dom'

import Feed from '../pages/Feed'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import SignUp from '../pages/SignUp'
import Account from '../pages/Account'
import Stats from '../pages/Stats'
import PhotoPost from '../pages/PhotoPost'
import Page404 from '../pages/404'

import ProtectedRoute from './ProtectedRoute'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Feed} exact />
      <Route path="/login" component={SignIn} exact />
      <Route path="/login/perdeu" component={ForgotPassword} exact />
      <Route path="/login/resetar" component={ResetPassword} />
      <Route path="/criar" component={SignUp} exact />
      <ProtectedRoute path="/conta" component={Account} exact />
      <ProtectedRoute path="/conta/estatisticas" component={Stats} exact />
      <ProtectedRoute path="/conta/postar" component={PhotoPost} exact />
      <Route path="*" component={Page404} />
    </Switch>
  )
}

export default Routes
