import React from 'react'

const teams = {
  red: {
    id: 'A',
    name: 'red',
    color: 'red',
  },
  blue: {
    id: 'B',
    name: 'blue',
    color: 'blue',
  },
}

const { Provider, Consumer } = React.createContext(teams.blue)

export { Consumer as TeamConsumer }

export class TeamProvider extends React.Component {
  state = { team: teams.blue }

  setTeam = team =>
    this.setState({ team: Object.values(teams).find(t => t.name === team) })

  render() {
    return (
      <Provider value={{ ...this.state, setTeam: this.setTeam }}>
        {this.props.children}
      </Provider>
    )
  }
}
