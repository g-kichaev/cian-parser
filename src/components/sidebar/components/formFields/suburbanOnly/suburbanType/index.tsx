// Компоненты
import { SelectMulti } from "../../../../../lowLevel/selectMulti"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"

type Props = {}

export const SuburbanType = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {object_type, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value === "suburban" && 
    <SelectMulti
        label="Тип"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={object_type?.value || []}
        onChange={value => dispatch(setData({
          object_type: {
            type: "terms",
            value: value
          }
        }))}
    />}
    </>
  )
}
