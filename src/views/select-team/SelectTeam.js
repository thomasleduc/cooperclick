import React from 'react'
import TeamButton from '../../components/team-button/TeamButton'

export default class SelectTeam extends React.Component {
  render() {
    return (
      <div>
        <TeamButton teamLabel="The bad" color="red" />
        <TeamButton teamLabel="The ugly" color="blue" />
      </div>
    )
  }
}
