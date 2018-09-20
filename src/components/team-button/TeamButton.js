import React from 'react'
import HexagonButton from '../hexagon-button/HexagonButton'

export default class TeamButton extends React.Component {
  render() {
    return <HexagonButton {...this.props}>{this.props.teamName}</HexagonButton>
  }
}
