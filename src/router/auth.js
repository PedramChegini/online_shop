import React from 'react'
import routerData from 'src/router/router.data'
import { Switch, Route } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path={routerData.auth._}>
        auth
      </Route>
      <Route path={routerData.auth.login._}>login</Route>
      <Route path={routerData.auth.register._}>register</Route>
    </Switch>
  )
}

export default AuthRouter
