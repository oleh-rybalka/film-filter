import styled from "styled-components"

export const Options = styled.div<{ open: boolean }>`
  width: 126px;
  height: 149px;
  position: absolute;
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
export const OptionText = styled.span`
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  padding-left: 6px;
`