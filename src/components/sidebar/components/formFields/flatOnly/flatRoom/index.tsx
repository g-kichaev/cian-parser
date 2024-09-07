// Компоненты
import { SelectMulti } from "../../../../../lowLevel/selectMulti"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"


type Props = {}

export const FlatRoom = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {room, offer_type} = useAppSelector(state => state.form.data)

  return (
    <>
    {offer_type?.value === "flat" && 
    <SelectMulti
        label="Комнаты"
        items={items}
        item_id={"id"}
        item_desc={"desc"}
        value={room?.value || []}
        onChange={value => dispatch(setData({
          room: {
            type: "multikey",
            value: value
          }
        }))}
    />}
    </>
  )
}
