import styled from "styled-components"
import { ReactComponent as StarSvg } from '../../assets/Star.svg'
import { ReactComponent as EmptyStarSvg } from '../../assets/Empty-star.svg'
export const OptionText = styled.span`
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
`
export const Options = styled.div<{ open: boolean }>`
  width: 237px;
  height: 301px;
  position: absolute;
  display: block;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 50px;
  left: 0;
  right: 0;
  border: 1px solid #979797;
  background: #fff;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
`
export const StyledStar=styled(StarSvg)`
margin:0 1.5px;
`
export const StyledEmptyStar=styled(EmptyStarSvg)`
margin:0 1.5px;
`