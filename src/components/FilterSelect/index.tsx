import { FC, useState } from 'react'
import styled from 'styled-components'
import GenreOptions from '../GenreOptions'
import RatingOptions from '../RatingOptions'

interface FilterInputProps {
  text: string
}

const StyledSelect = styled.div``

const FilterSelect: FC<FilterInputProps> = ({ text }) => {
  const [showGenreDropdown, setShowGenreDropdown] = useState(false)
  const [showRatingDropdown, setShowRatingDropdown] = useState(false)

  function genreDropdownHandler() {
    setShowRatingDropdown(false)
    setShowGenreDropdown((prev) => !prev)
  }
  function ratingDropdownHandler() {
    setShowGenreDropdown(false)
    setShowRatingDropdown((prev) => !prev)
  }
  return (
    <div>
      <StyledSelect>
        {text === 'Genre' ? (
          <GenreOptions dropdownHandler={genreDropdownHandler} />
        ) : (
          <RatingOptions dropdownHandler={ratingDropdownHandler} />
        )}
      </StyledSelect>
    </div>
  )
}
export default FilterSelect
