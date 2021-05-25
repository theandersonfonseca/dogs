import React from 'react'

import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import IsAuth from '../helpers/isAuth'

type ProtectedRouteProps = {
  path: string
  component:
    | React.ComponentType
    | React.ComponentType<RouteComponentProps>
    | undefined
  exact?: boolean | undefined
}

const ProtectedRoute = ({ path, component, ...props }: ProtectedRouteProps) => {
  return IsAuth() ? (
    <Route path={path} component={component} {...props} />
  ) : (
    <Redirect to="/login" />
  )
}

export default ProtectedRoute
