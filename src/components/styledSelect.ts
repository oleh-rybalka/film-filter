import styled from "styled-components";
import { ReactComponent as ArrowDownSvg } from '../assets/arrow-down.svg'
import { ReactComponent as ArrowUpSvg } from '../assets/arrow-up.svg'

export const StyledArrowUpSvg = styled(ArrowUpSvg)`

`
export const StyledArrowDownSvg = styled(ArrowDownSvg)`

`
export const CheckBoxContainer = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: white;
    border: 1px solid #000000;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  input:checked ~ .checkmark {
    background-color: #2196f3;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 4px;
    top: 1px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
`
export const SelectWrapper = styled.div`
  position: relative;
  user-select: none;
margin-left:13px;
margin-top:22px;
`
export const Select = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 113px;
`
export const SelectTrigger = styled.div`
  height: 48px;
  padding-left: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid grey;
  background: #ffffff;
  cursor: pointer;
  svg{ 
    position: absolute;
    right:15px;
    top:19px;
  }
`
export const Option = styled.span`
position: relative;
display: block;
font-size: 14px;
font-weight: 400;
color: #3b3b3b;
line-height: 22px;
cursor: pointer;
transition: all 0.5s;
`

export const SelectText = styled.span`
font-family: 'DM Sans';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.20000000298023224px;
text-align: left;

`