import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { injectGlobal } from 'emotion'

import Game from './views/game/Game'
import SelectTeam from './views/select-team/SelectTeam'

// the Apollo cache is set up automatically
const client = new ApolloClient({
  uri: 'http://'
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
        <BrowserRouter>
          <div>
            <Route path="/" component={SelectTeam} />
            <Route path="/game/:gameId" component={Game} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
