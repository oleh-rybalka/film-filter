import { useCallback, useEffect, useState } from 'react'
import { data } from '../../dummyData'
import GenreOptions from '../GenreOptions'
import RatingOptions from '../RatingOptions'
import SearchInput from '../SearchInput'
import { VariantProps } from '../types'

interface FilmProps {
  title: string
  rating: number
  category: string
}
//const genres = ['Any genre', 'Action', 'Comedy', 'Thriller', 'Action', 'Drama']
const Filter = () => {
  const [filteredFilms, setFilteredFilms] = useState<FilmProps[]>([])
  const [genreFilter, setGenreFilter] = useState<VariantProps[]>([
    { id: 'Any genre', value: false },
    { id: 'Action', value: false },
    { id: 'Comedy', value: false },
    { id: 'Thriller', value: false },
    { id: 'Drama', value: false },
  ])
  const [ratingFilter, setRatingFilter] = useState<VariantProps[]>([
    { id: '0', value: false },
    { id: '1', value: false },
    { id: '2', value: false },
    { id: '3', value: false },
    { id: '4', value: false },
    { id: '5', value: false },
    { id: '6', value: false },
    { id: '7', value: false },
    { id: '8', value: false },
    { id: '9', value: false },
    { id: '10', value: false },
  ])
  const [searchValue, setSearchValue] = useState('')
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  const getActiveFilters = useCallback(() => {
    const activeGenres = genreFilter
      .filter((genre) => genre.value === true)
      .map(({ id }) => id)
    const activeRating = ratingFilter
      .filter((rate) => rate.value === true)
      .map(({ id }) => id)

    return [activeGenres, activeRating]
  }, [genreFilter, ratingFilter])
  const filterBySearch = useCallback(() => {
    const searchFiltering = data.filter((dataItem) => {
      if (dataItem.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return dataItem
      }
      return null
    })
    return searchFiltering
  }, [searchValue])
  function filterByGenre(searchFiltering: FilmProps[], activeGenres: string[]) {
    return searchFiltering.filter((dataItem) => {
      if (!activeGenres.length) return dataItem
      if (activeGenres.includes('Any genre')) return dataItem
      if (activeGenres.includes(dataItem.category) === true) return dataItem

      return null
    })
  }
  function filterByRating(genreFiltering: FilmProps[], activeRating: string[]) {
    return genreFiltering.filter((dataItem) => {
      if (activeRating.length === 0) return dataItem
      if (activeRating.includes('0')) return dataItem
      if (parseInt(activeRating[activeRating.length - 1]) < dataItem.rating)
        return dataItem
      return null
    })
  }
  useEffect(() => {
    const [activeGenres, activeRating] = getActiveFilters()
    const searchFiltering = filterBySearch()
    const genreFiltering = filterByGenre(searchFiltering, activeGenres)
    const ratingFiltering = filterByRating(genreFiltering, activeRating)
    setFilteredFilms(ratingFiltering)
  }, [filterBySearch, getActiveFilters, searchValue])
  return (
    <>
      <SearchInput handleSearch={handleSearch} filteredFilms={filteredFilms} />
      <RatingOptions setFilter={setRatingFilter} />
      <GenreOptions setFilter={setGenreFilter} />
    </>
  )
}
export default Filter
