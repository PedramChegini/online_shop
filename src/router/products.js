import React from 'react'
import routerData from 'src/router/router.data'
import { Switch, Route } from 'react-router-dom'

const ProductsRouter = () => {
  return (
    <Switch>
      <Route exact path={routerData.products._}>
        products
      </Route>
      <Route path={routerData.products.product._}>product id</Route>
    </Switch>
  )
}

export default ProductsRouter
