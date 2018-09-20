import styled from 'react-emotion'

export default styled('a')`
  color: ${props => props.color};
  position: relative;
  display: block;
  background: transparent;
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  margin: 40px auto;
  cursor: pointer;
  user-select: none;

  &:before,
  &:after {
    width: 200px;
    left: 0;
    height: 27px;
    z-index: -1;
    border: 3px solid ${props => props.color};
  }

  &:before {
    position: absolute;
    content: '';
    border-bottom: none;
    -webkit-transform: perspective(15px) rotateX(5deg);
    -moz-transform: perspective(15px) rotateX(5deg);
    transform: perspective(15px) rotateX(5deg);
  }

  &:after {
    position: absolute;
    top: 29px;
    content: '';
    border-top: none;
    -webkit-transform: perspective(15px) rotateX(-5deg);
    -moz-transform: perspective(15px) rotateX(-5deg);
    transform: perspective(15px) rotateX(-5deg);
  }

  &:hover:before,
  &:hover:after {
    background: ${props => props.color};
  }

  &:hover {
    color: #fff;
  }

  &:active {
    opacity: 0.5;
  }
`
