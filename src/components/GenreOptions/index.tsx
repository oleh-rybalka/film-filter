import { FC, useState } from 'react'
import styled from 'styled-components'
import {
  CheckBoxContainer,
  FilterContainer,
  StyledArrowDownSvg,
  StyledArrowUpSvg,
} from '../styledOptions'
import { OptionProps, VariantProps } from '../types'
const genres = ['Any genre', 'Action', 'Comedy', 'Thriller', 'Action', 'Drama']

const MainOption = styled.div`
  border: 1px solid black;
  width: 95px;
  height: 32px;
  padding-left: 16px;
  padding-top: 14px;
  position: relative;
  user-select: none;
  position: relative;
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

const StyledOptionList = styled.ul<{ show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? 'inherit' : 'none')};
  border: 1px solid black;
  width: 124px;
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

const GenreOptions: FC<OptionProps> = () => {
  const [variants, setVariants] = useState<VariantProps[]>([
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
  ])
  function checkboxhandler(id: number, e: React.ChangeEvent<HTMLInputElement>) {
    setVariants((prev) => {
      return prev.map((variant) => {
        if (variant.id === id) return { ...variant, value: e.target.checked }
        return { ...variant }
      })
    })
    console.log(variants)
  }
  const [dropdown, setDropdown] = useState(false)
  function dropdownHandler() {
    setDropdown((prev) => !prev)
  }
  return (
    <FilterContainer>
      <MainOption onClick={dropdownHandler}>
        <span>Genre</span>
        {dropdown ? <StyledArrowDownSvg /> : <StyledArrowUpSvg />}
      </MainOption>
      <StyledOptionList show={dropdown}>
        {genres.map((genre, i) => (
          <StyledOption key={i}>
            <CheckBoxContainer>
              <StyledGenreType>{genre}</StyledGenreType>
              <input type='checkbox' onChange={(e) => checkboxhandler(i, e)} />
              <span className='checkmark'></span>
            </CheckBoxContainer>
          </StyledOption>
        ))}
      </StyledOptionList>
    </FilterContainer>
  )
}
export default GenreOptions
