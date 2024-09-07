// Компоненты
import { SelectMulti } from "../../../../../lowLevel/selectMulti"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"

type Props = {}

export const SuburbanHeating = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {heating_type, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value === "suburban" && 
    <SelectMulti
        label="Отопление"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={heating_type?.value || []}
        onChange={value => dispatch(setData({
          heating_type: {
            type: "terms",
            value: value
          }
        }))}
    />}
    </>
  )
}
