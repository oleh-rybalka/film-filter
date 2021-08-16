import { FC, useState } from 'react'
import SuggestList from '../SuggestList'
import { SearchContainer, StyledSearchInput } from './styled'

interface FilmProps {
  title: string
  rating: number
  category: string
}
interface SearchinputProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  filteredFilms: FilmProps[]
}
const SearchInput: FC<SearchinputProps> = ({ handleSearch, filteredFilms }) => {
  const [show, setShow] = useState(false)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') setShow(false)
    else setShow(true)
    handleSearch(e)
  }
  return (
    <SearchContainer>
      <StyledSearchInput
        onChange={(e) => handleChange(e)}
        placeholder='Enter movie name'
      ></StyledSearchInput>
      <SuggestList show={show} films={filteredFilms} />
    </SearchContainer>
  )
}
export default SearchInput
