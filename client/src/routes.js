import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Setting from './containers/Setting'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="setting" component={Setting} />
  </Route>
)
