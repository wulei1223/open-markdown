import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Editor from './containers/Editor'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="editor" component={Editor} />
  </Route>
)
