import * as React from 'react'
import styled from 'react-emotion'

import HexagonTile from './HexagonTile'

const LAYOUT_HEIGHT = 100
const HEX_SIZE = 100
const MARGIN = 10

const HexagonLayoutContainer = styled('div')`
  width: 600px;
  height: ${props => `${props.height}px`};
  position: relative;
`

export default class HexagonLayout extends React.Component {
  static defaultProps = {
    size: 1,
  }

  constructor(props) {
    super(props)

    this.destructionInterval
    this.state = {
      hexagons: this.getRows(0, 1 + this.props.size * 2),
    }
  }

  layoutNeedMoreRows(rowNumber) {
    return Math.abs(rowNumber) < this.props.size
  }

  getRows(rowNumber, hexCount) {
    let hexes = []
    const rowOffsetLeft = (Math.abs(rowNumber) * (HEX_SIZE + MARGIN)) / 2

    for (let i = 0; i < hexCount; i++) {
      const hexOffsetLeft = i * HEX_SIZE + i * MARGIN
      hexes.push({
        x: rowOffsetLeft + hexOffsetLeft,
        y: LAYOUT_HEIGHT / 2 - rowNumber * HEX_SIZE,
        id: rowNumber * 10 + (rowNumber >= 0 ? i : -i),
        color: Math.random() >= 0.5 ? 'blue' : 'red',
        isWaiting: false,
      })
    }

    if (rowNumber === 0) {
      return [
        ...this.getRows(rowNumber + 1, hexCount - 1),
        ...hexes,
        ...this.getRows(rowNumber - 1, hexCount - 1),
      ]
    } else if (this.layoutNeedMoreRows(rowNumber)) {
      return [
        ...this.getRows(
          rowNumber > 0 ? rowNumber + 1 : rowNumber - 1,
          hexCount - 1
        ),
        ...hexes,
      ]
    }
    return hexes
  }

  selfDestruct = () => {
    console.log('SELF DESTRUCTION IMMINENT')
    const newHexes = this.state.hexagons.map(hex => ({
      ...hex,
      x: hex.x + Math.random() * 100,
      y: hex.y + (Math.random() - 0.5) * 200,
    }))
    this.setState({ hexagons: newHexes })
  }

  hasWon() {
    return (
      this.state.hexagons.every(hex => hex.color === 'blue') ||
      this.state.hexagons.every(hex => hex.color === 'red')
    )
  }

  toggleHexWaiting(hexId) {
    const newHexes = [...this.state.hexagons]
    const hexToUpdate = newHexes.find(hex => hex.id === hexId)
    hexToUpdate.isWaiting = !hexToUpdate.isWaiting
    this.setState({ hexagons: newHexes })
  }

  convertHex(hexId) {
    const newHexes = [...this.state.hexagons]
    const hexToUpdate = newHexes.find(hex => hex.id === hexId)
    hexToUpdate.color = hexToUpdate.color === 'blue' ? 'red' : 'blue'
    hexToUpdate.isWaiting = false
    this.setState({ hexagons: newHexes })
  }

  onHexClick = (hexId, userId) => {
    return () => {
      console.log('Hex was clicked:', hexId, userId)
      const { team } = this.props
      const hex = this.state.hexagons.find(hex => hex.id === hexId)
      if (team.color !== hex.color) {
        if (hex.isWaiting) this.convertHex(hexId)
        else this.toggleHexWaiting(hexId, userId)
      }
      if (this.hasWon()) {
        this.destructionInterval = setInterval(this.selfDestruct, 200)
        setTimeout(() => clearInterval(this.destructionInterval), 5000)
      }
    }
  }

  render() {
    return (
      <HexagonLayoutContainer height={LAYOUT_HEIGHT}>
        <React.Fragment>
          {this.state.hexagons.map(hexagon => (
            <HexagonTile
              x={hexagon.x}
              y={hexagon.y}
              id={hexagon.id}
              key={hexagon.id}
              color={hexagon.color}
              isWaiting={hexagon.isWaiting}
              onClick={this.onHexClick}
            />
          ))}
        </React.Fragment>
      </HexagonLayoutContainer>
    )
  }
}
