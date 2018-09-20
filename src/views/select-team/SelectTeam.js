import React from 'react'
import TeamButton from '../../components/team-button/TeamButton'
import { css } from 'emotion'

const subtitleStyle = css`
  color: #222;
  text-shadow: 0 2px 3px #555;
`

export default class SelectTeam extends React.Component {
  chooseTeam = team => () => {
    console.log(team)
  }

  render() {
    return (
      <div>
        <h3 className={subtitleStyle}>Select your team (if you dare fight):</h3>
        <TeamButton
          teamName="The bad"
          color="red"
          onClick={this.chooseTeam('red')}
        />
        <TeamButton
          teamName="The ugly"
          color="blue"
          onClick={this.chooseTeam('blue')}
        />
      </div>
    )
  }
}
