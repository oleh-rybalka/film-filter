import styled from "styled-components";
import { ReactComponent as ArrowDownSvg } from '../assets/arrow-down.svg'
import { ReactComponent as ArrowUpSvg } from '../assets/arrow-up.svg'
export const FilterContainer = styled.div`
  position: relative;
  margin-left: 13px;
`
export const MainOption = styled.div`
  border: 1px solid black;
  width: 95px;
  height: 32px;
  padding-left: 16px;
  padding-top: 14px;
  position: relative;
  user-select: none;
  input {
    opacity: 0;
    position: absolute;
    left: -3px;
    top: 0;
    width: 110px;
    height: 42px;
    z-index: 1000;
  }
`
export const StyledArrowUpSvg = styled(ArrowUpSvg)`
  position: absolute;
  right: 19.36px;
  top: 19.36px;
`
export const StyledArrowDownSvg = styled(ArrowDownSvg)`
  position: absolute;
  right: 19.36px;
  top: 19.36px;
`
export const CheckBoxContainer = styled.label`
  display: block;
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
    left: 3px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`