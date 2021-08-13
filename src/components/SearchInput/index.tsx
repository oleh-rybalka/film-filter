import styled from 'styled-components'

const SearchContainer = styled.div``
const StyledSearchInput = styled.input`
  height: 42px;
  width: 441px;
`

const SearchInput = () => {
  return (
    <SearchContainer>
      <StyledSearchInput placeholder='Enter movie name'></StyledSearchInput>
    </SearchContainer>
  )
}
export default SearchInput
