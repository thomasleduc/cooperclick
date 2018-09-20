import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { injectGlobal } from 'react-emotion'

import Game from './views/game/Game'
import SelectTeam from './views/select-team/SelectTeam'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__'
})

const client = new ApolloClient({
  networkInterface
})

injectGlobal`
  @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400';
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router history={browserHistory}>
          <Route path="/" component={SelectTeam} />
          <Route path="/game/:gameId" component={Game} />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
