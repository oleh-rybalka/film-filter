import styled from "styled-components"
import { ReactComponent as StarSvg } from '../../assets/Star.svg'
import { ReactComponent as EmptyStarSvg } from '../../assets/Empty-star.svg'
import { ReactComponent as HalfStarSvg } from '../../assets/Half-star.svg'
export const SuggestContainer = styled.div<{ show: boolean }>`
width: 441;
margin-top: 4px;
display: ${(props) => (props.show ? 'block' : 'none')};
border: ${(props) => (props.show ? '1px solid #979797' : 'none')};
`

export const SuggestItem = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-left: 14px;
height: 70px;
`
export const Title = styled.span`
  padding-top: 13px;
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
`
export const Genre = styled.span`
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: #777777;
  position: absolute;
  right: 11px;
  top: 13px;
`
export const Rating = styled.span``
export const Error=styled.p`
text-align: center;
`
export const StyledStar=styled(StarSvg)`
margin:0 1.5px;
`
export const StyledEmptyStar=styled(EmptyStarSvg)`
margin:0 1.5px;
`
export const StyledHalfStar=styled(HalfStarSvg)`
margin:0 1.5px;
`
