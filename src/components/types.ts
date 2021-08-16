import { Dispatch, SetStateAction } from "react";

export interface OptionProps{
  setFilter: Dispatch<SetStateAction<VariantProps[]>>

}
export interface VariantProps {
    id: string
    value: boolean
  }