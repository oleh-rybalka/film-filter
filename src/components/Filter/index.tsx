import FilterSelect from '../FilterSelect'
import SearchInput from '../SearchInput'

const data = [
  { title: 'The Matrix', rating: 7.5, category: 'Action' },
  { title: 'Focus', rating: 6.9, category: 'Comedy' },
  { title: 'The Lazarus Effect', rating: 6.4, category: 'Thriller' },
  { title: 'Everly', rating: 5.0, category: 'Action' },
  { title: 'Maps to the Stars', rating: 7.5, category: 'Drama' },
]

const Filter = () => {
  return (
    <>
      <SearchInput />
      <FilterSelect text={`Rating`} />
      <FilterSelect text={`Genre`} />
    </>
  )
}
export default Filter
