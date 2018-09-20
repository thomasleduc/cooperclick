import styled from 'react-emotion'

export default styled('h1')`
  display: inline;
  position: relative;
  font-size: 100px;
  letter-spacing: -5px;
  color: rgba(0, 0, 255, 0.5);

  &:after {
    content: '${props => props.children}';
    position: absolute;
    left: 10px;
    top: 5px;
    color: rgba(255, 0, 0, 0.5);
  }
`
