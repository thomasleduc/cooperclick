import React from 'react'
import { withRouter } from 'react-router-dom'
import { css } from 'emotion'
import TeamButton from '../../components/team-button/TeamButton'

const subtitleStyle = css`
  color: #222;
  text-shadow: 0 2px 3px #555;
`

class SelectTeam extends React.Component {
  chooseTeam = team => () => {
    this.props.setTeam(team)
    this.props.history.push('/game/fight-room-34')
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

export default withRouter(SelectTeam)
