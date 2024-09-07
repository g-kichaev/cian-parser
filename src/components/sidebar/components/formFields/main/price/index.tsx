// Компоненты
import { RangeField } from "../../../../../lowLevel/rangeField"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"


type Props = {}

export const Price = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {price} = useAppSelector(state => state.form.data)

  return (
    <RangeField 
      label="Цена"
      value_from={price?.value.from}
      value_to={price?.value.to}
      onChange={value => dispatch(setData({
            price: {
              type: "range",
              value: value
            }
      }))}
      endAdornment="₽"
    />
  )
}
