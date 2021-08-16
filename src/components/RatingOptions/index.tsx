import { FC, useEffect, useRef, useState } from 'react'
import {
  Select,
  SelectText,
  SelectTrigger,
  SelectWrapper,
  StyledArrowDownSvg,
  StyledArrowUpSvg,
  Option,
  CheckBoxContainer,
} from '../styledSelect'

import { OptionProps } from '../types'
import { Options, OptionText, StyledEmptyStar, StyledStar } from './styled'

const rating = ['', '', '', '', '', '', '', '', '', '']

const RatingOptions: FC<OptionProps> = ({ setFilter }) => {
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
  function spawnStars(i: number) {
    let array = new Array(10)
    for (let j = 0; j < 10; j++) {
      if (j < i + 1) {
        array.fill(<StyledStar key={j} />, j, j + 1)
      }
      if (j >= i + 1) {
        array.fill(<StyledEmptyStar key={j} />, j, j + 1)
      }
    }

    return array
  }
  return (
    <SelectWrapper>
      <Select>
        <SelectTrigger onClick={toggleSelect}>
          <SelectText>Rating</SelectText>
          {open ? <StyledArrowUpSvg /> : <StyledArrowDownSvg />}
        </SelectTrigger>
        <Options open={open} ref={modalRef}>
          <Option>
            <CheckBoxContainer>
              <OptionText>Any rating</OptionText>
              <input
                type='checkbox'
                onChange={(e) => {
                  checkboxhandler('0', e)
                }}
              />
              <span className='checkmark'></span>
            </CheckBoxContainer>
          </Option>
          {rating.map((rate, i) => (
            <Option key={i}>
              <CheckBoxContainer>
                <OptionText>{spawnStars(i)}</OptionText>
                <input
                  type='checkbox'
                  onChange={(e) => {
                    checkboxhandler(i + 1 + '', e)
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
export default RatingOptions
