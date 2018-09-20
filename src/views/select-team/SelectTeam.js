import React from 'react'
import TeamButton from '../../components/team-button/TeamButton'

export default class SelectTeam extends React.Component {
  render() {
    return (
      <div>
        <h3>Select your team</h3>
        <TeamButton teamName="The bad" color="red" />
        <TeamButton teamName="The ugly" color="blue" />
      </div>
    )
  }
}
