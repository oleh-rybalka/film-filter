import { FC, useEffect, useRef, useState } from 'react'
import {
  CheckBoxContainer,
  Select,
  SelectTrigger,
  SelectWrapper,
  StyledArrowDownSvg,
  StyledArrowUpSvg,
  Option,
  SelectText,
} from '../styledSelect'
import { OptionProps } from '../types'
import { Options, OptionText } from './styled'

const genres = ['Any genre', 'Action', 'Comedy', 'Thriller', 'Drama']

const GenreOptions: FC<OptionProps> = ({ setFilter }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const blur = (e: any) => {
      if (!modalRef.current) return
      if (!modalRef.current.contains(e.target) && open) {
        setOpen(false)
      }
    }
    window.addEventListener('click', blur)
    return () => {
      window.removeEventListener('click', blur)
    }
  }, [open])
  function toggleSelect() {
    setOpen((prev) => !prev)
  }

  function checkboxhandler(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    setFilter((prev) => {
      return prev.map((variant) => {
        if (variant.id === id) return { ...variant, value: e.target.checked }
        return { ...variant }
      })
    })
  }
  return (
    <SelectWrapper>
      <Select>
        <SelectTrigger onClick={toggleSelect}>
          <SelectText>Genre</SelectText>
          {open ? <StyledArrowUpSvg /> : <StyledArrowDownSvg />}
        </SelectTrigger>
        <Options open={open} ref={modalRef}>
          {genres.map((genre, i) => (
            <Option key={i}>
              <CheckBoxContainer>
                <OptionText>{genre}</OptionText>
                <input
                  type='checkbox'
                  onChange={(e) => {
                    checkboxhandler(genre, e)
                  }}
                />
                <span className='checkmark'></span>
              </CheckBoxContainer>
            </Option>
          ))}
        </Options>
      </Select>
    </SelectWrapper>
  )
}
export default GenreOptions
