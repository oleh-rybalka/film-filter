import { FC } from 'react'
import {
  Genre,
  Rating,
  SuggestContainer,
  SuggestItem,
  Title,
  Error,
  StyledStar,
  StyledHalfStar,
  StyledEmptyStar,
} from './styled'

interface FilmProps {
  title: string
  rating: number
  category: string
}
interface SuggestListProps {
  films: FilmProps[]
  show: boolean
}

const SuggestList: FC<SuggestListProps> = ({ films, show }) => {
  function getRating(rate: number) {
    let array = new Array(11)
    const blackStars = Math.floor(rate)
    for (let i = 0; i < 11; i++) {
      if (i < blackStars) {
        array.fill(<StyledStar key={i} />, i, i + 1)
      }
      if (i === blackStars + 1) {
        array.fill(<StyledHalfStar key={i} />, i, i + 1)
      }
      if (i > blackStars + 1) {
        array.fill(<StyledEmptyStar key={i} />, i, i + 1)
      }
    }

    return array
  }
  return (
    <SuggestContainer show={show}>
      {show === true && films.length ? (
        films.map((film, i) => (
          <SuggestItem key={i}>
            <Title>{film.title}</Title>
            <Rating>{getRating(film.rating)}</Rating>
            <Genre>{film.category}</Genre>
          </SuggestItem>
        ))
      ) : (
        <Error>No films found</Error>
      )}
    </SuggestContainer>
  )
}
export default SuggestList
