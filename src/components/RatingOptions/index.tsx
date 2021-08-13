import { FC, useState } from 'react'
import styled from 'styled-components'
import {
  CheckBoxContainer,
  FilterContainer,
  MainOption,
  StyledArrowDownSvg,
  StyledArrowUpSvg,
} from '../styledOptions'
import { OptionProps, VariantProps } from '../types'
import { ReactComponent as StarSvg } from '../../assets/Star.svg'
const rating = ['', '', '', '', '', '', '', '', '', '']

const StyledOptionList = styled.ul<{ show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? 'inherit' : 'none')};
  border: 1px solid black;
  width: 239px;
  height: 303px;
  list-style: none;
  padding-left: 12px;
  padding: 12px 0;
  margin-top: 3px;
  background: white;
`
const StyledOption = styled.li`
  padding: 2px 0;
`
const StyledGenreType = styled.span`
  font-family: 'DM Sans';
  font-size: 14px;
`

const RatingOptions: FC<OptionProps> = () => {
  const [variants, setVariants] = useState<VariantProps[]>([
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
    { id: 6, value: false },
    { id: 7, value: false },
    { id: 8, value: false },
    { id: 9, value: false },
    { id: 10, value: false },
  ])
  const [dropdown, setDropdown] = useState(false)
  function dropdownHandler() {
    setDropdown((prev) => !prev)
  }
  function checkboxhandler(id: number, e: React.ChangeEvent<HTMLInputElement>) {
    setVariants((prev) => {
      return prev.map((variant) => {
        if (variant.id === id) return { ...variant, value: e.target.checked }
        return { ...variant }
      })
    })
    console.log(variants)
  }
  return (
    <FilterContainer>
      <MainOption onClick={dropdownHandler}>
        <span>Rating</span>
        {dropdown ? <StyledArrowDownSvg /> : <StyledArrowUpSvg />}
      </MainOption>
      <StyledOptionList show={dropdown}>
        <StyledOption>
          <CheckBoxContainer>
            <StyledGenreType>Any rating</StyledGenreType>
            <input type='checkbox' onChange={(e) => checkboxhandler(0, e)} />
            <span className='checkmark'></span>
          </CheckBoxContainer>
        </StyledOption>
        {rating.map((rate, i) => (
          <StyledOption key={i}>
            <CheckBoxContainer>
              <StyledGenreType>
                {new Array(i + 1).fill(<StarSvg />)}
              </StyledGenreType>
              <input
                type='checkbox'
                onChange={(e) => checkboxhandler(i + 1, e)}
              />
              <span className='checkmark'></span>
            </CheckBoxContainer>
          </StyledOption>
        ))}
      </StyledOptionList>
    </FilterContainer>
  )
}
export default RatingOptions
