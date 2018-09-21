import React from 'react'
import HexagonLayout from '../../components/hexagon/HexagonLayout'
import { TeamConsumer } from '../../application/team/TeamContext'

export default class Game extends React.Component {
  render() {
    return (
      <TeamConsumer>
        {({ team }) => (
          <div>
            <p>A good game {team.name}</p>
            <HexagonLayout team={team} userId={1234} />
          </div>
        )}
      </TeamConsumer>
    )
  }
}
