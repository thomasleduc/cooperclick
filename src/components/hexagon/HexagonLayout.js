import * as React from 'react'
import styled from 'react-emotion'

import HexagonTile from './HexagonTile'

const LAYOUT_HEIGHT = 600
const HEX_SIZE = 100
const MARGIN = 10

const HexagonLayoutContainer = styled('div')`
  width: 400px;
  height: ${props => `${props.height}px`};
`

export default class HexagonLayout extends React.Component {
  static defaultProps = {
    size: 1,
  }

  layoutNeedMoreRows(rowNumber) {
    console.log('rowNumber: ', rowNumber)
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

  // getRecursiveRows() {}

  // getHexagonPositions(size) {
  //   return [...this.getRow(1, 2), ...this.getRow(0, 3), ...this.getRow(-1, 2)]
  // }

  render() {
    const hexagons = this.getRows(0, 1 + this.props.size * 2)
    return (
      <HexagonLayoutContainer height={LAYOUT_HEIGHT}>
        <React.Fragment>
          {hexagons.map(hexagon => (
            <HexagonTile
              x={hexagon.x}
              y={hexagon.y}
              id={hexagon.id}
              key={hexagon.id}
            />
          ))}
        </React.Fragment>
      </HexagonLayoutContainer>
    )
  }
}
