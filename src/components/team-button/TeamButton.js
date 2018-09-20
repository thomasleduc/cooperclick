import React from 'react'
import styled from 'react-emotion'

const Button = styled('button')`
  background-color: ${props => props.color};
`

export default class TeamButton extends React.Component {
  render() {
    return <Button>{this.props.teamName}</Button>
  }
}
