// Компоненты
import { RangeField } from "../../../../../lowLevel/rangeField"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"


type Props = {}

export const Area = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {area} = useAppSelector(state => state.form.data)

  return (
    <RangeField 
      label="Площадь"
      value_from={area?.value.from}
      value_to={area?.value.to}
      onChange={value => dispatch(setData({
            area: {
              type: "range",
              value: value
            }
      }))}
      endAdornment="м²"
    />
  )
}
