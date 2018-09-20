import * as React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'

const hexOuter = css`
  background: #abf8ff;
  width: 210px;
  height: 120px;
`
const hexInner = css`
  background: #373940;
  width: 200px;
  height: 115px;
  position: relative;
  left: 5px;
  top: 82px !important;
  border-radius: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
`
const h1 = css`
  position: absolute;
  top: 80px;
`
const h2 = css`
  position: absolute;
  top: 80px;
  transform: rotate(60deg);
  -webkit-transform: rotate(60deg);
`
const h3 = css`
  position: absolute;
  top: 80px;
  transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
`

const HexFrame = styled('div')`
  width: 210px;
  height: 0px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
  transform-origin: 50% 115px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  &:hover {
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
  }
`
const HexOuter1 = styled('div')`
  ${hexOuter} ${h1};
`
const HexOuter2 = styled('div')`
  ${hexOuter} ${h2};
`
const HexOuter3 = styled('div')`
  ${hexOuter} ${h3};
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
  color: #abf8ff;
  font-weight: bold;
  font-size: 160px;
  left: 59px;
  top: 26px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
`

export default class HexagonTile extends React.Component {
  render() {
    return (
      <HexFrame>
        <HexOuter1 />
        <HexOuter2 />
        <HexOuter3 />
        <HexInner1 />
        <HexInner2 />
        <HexInner3 />
        <HexLabel>+</HexLabel>
      </HexFrame>
    )
  }
}
