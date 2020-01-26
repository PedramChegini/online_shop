import React from 'react'
import routerData from 'src/router/router.data'
import { Switch, Route } from 'react-router-dom'

const ProfileRouter = () => {
  return (
    <Switch>
      <Route exact path={routerData.user._}>
        user
      </Route>
      <Route path={routerData.user.profile._}>profile</Route>
    </Switch>
  )
}

export default ProfileRouter
