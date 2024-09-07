// Компоненты
import { SelectMulti } from "../../../../../lowLevel/selectMulti"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"

type Props = {}

export const OfficeType = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {office_type, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value === "offices" && 
    <SelectMulti
        label="Тип"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={office_type?.value || []}
        onChange={value => dispatch(setData({
          office_type: {
            type: "terms",
            value: value
          }
        }))}
    />}
    </>
  )
}
