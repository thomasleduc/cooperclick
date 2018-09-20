import * as React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const COLORS = {
  red: '#C90424',
  blue: '#0197F6', // #abf8ff
}

const hexOuter = css`
  background: #abf8ff;
  width: 100px;
  height: 58px;
`
const hexInner = css`
  background: #373940;
  width: 94.5px;
  height: 55.5px;
  position: relative;
  left: 2.5px;
  top: 51px !important;
  border-radius: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
`
const h1 = css`
  position: absolute;
  top: 50px;
`
const h2 = css`
  position: absolute;
  top: 50px;
  transform: rotate(60deg);
  -webkit-transform: rotate(60deg);
`
const h3 = css`
  position: absolute;
  top: 50px;
  transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
`

const HexFrame = styled('div')`
  left: ${props => `${props.x}px`};
  top: ${props => `${props.y}px`};
  display: inline-block;
  width: 100px;
  height: 58px;
  margin: 0 auto;
  margin-top: 20px;
  position: absolute;
  cursor: pointer;
  transform-origin: 50% 58px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  &:hover {
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
  }
`
const HexOuter1 = styled('div')`
  ${hexOuter} ${h1};
  background-color: ${props => COLORS[props.color]};
`
const HexOuter2 = styled('div')`
  ${hexOuter} ${h2};
  background-color: ${props => COLORS[props.color]};
`
const HexOuter3 = styled('div')`
  ${hexOuter} ${h3};
  background-color: ${props => COLORS[props.color]};
`
const HexInner1 = styled('div')`
  ${hexInner} ${h1};
`
const HexInner2 = styled('div')`
  ${hexInner} ${h2};
`
const HexInner3 = styled('div')`
  ${hexInner} ${h3};
`
const HexLabel = styled('div')`
  position: absolute;
  color: ${props => COLORS[props.color]};
  font-weight: bold;
  font-size: 100px;
  left: 22px;
  top: 7px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
`

export default class HexagonTile extends React.Component {
  static defaultProps = {
    color: 'blue',
  }

  render() {
    return (
      <HexFrame x={this.props.x} y={this.props.y}>
        <HexOuter1 color={this.props.color} />
        <HexOuter2 color={this.props.color} />
        <HexOuter3 color={this.props.color} />
        <HexInner1 color={this.props.color} />
        <HexInner2 color={this.props.color} />
        <HexInner3 color={this.props.color} />
        <HexLabel color={this.props.color}>+</HexLabel>
      </HexFrame>
    )
  }
}
