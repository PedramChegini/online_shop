import React from 'react'
import routerData from 'src/router/router.data'
import AuthRouter from 'src/router/auth'
import ProfileRouter from 'src/router/profile'
import ProductsRouter from 'src/router/products'
import Home from 'src/components/home/Home.container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routerData._}>
          <Home />
        </Route>
        <Route path={routerData.auth._}>
          <AuthRouter />
        </Route>
        <Route path={routerData.products._}>
          <ProductsRouter />
        </Route>
        <Route path={routerData.user._}>
          <ProfileRouter />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
