import { TeamConsumer } from '../../application/team/TeamContext'
import React from 'react'
import SelectTeam from './SelectTeam'

export default props => (
  <TeamConsumer>
    {({ setTeam }) => <SelectTeam setTeam={setTeam} {...props} />}
  </TeamConsumer>
)
