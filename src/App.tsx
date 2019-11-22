import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Layout } from 'components'
import { PokeSearch, PokeDetail } from 'views'

function App() {
  const content = (
    <Switch>
      <Route exact path="/pokemon/:id" component={ PokeDetail } />
      <Route path="/" component={ PokeSearch } />
    </Switch>
  )
  return (
    <Router>
      <Layout>{ content }</Layout>
    </Router>
  );
}

export default App;
