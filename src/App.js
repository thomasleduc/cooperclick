import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { css, injectGlobal } from 'emotion'

import Game from './views/game/Game'
import SelectTeam from './views/select-team/SelectTeam'
import AnaglyphicText from './components/anaglyphic-text/AnaglyphicText'

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
    background-color: #3c3c3c;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const headerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const mainStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <header className={headerStyle}>
          <AnaglyphicText>CooperClick</AnaglyphicText>
        </header>
        <BrowserRouter>
          <div className={mainStyle}>
            <Route exact path="/" component={SelectTeam} />
            <Route path="/game/:gameId" component={Game} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
