// Компоненты
import { SelectSingle } from "../../../../../lowLevel/selectSingle"
import { items } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData, setRegion } from "../../../../../../store/form"
import { useEffect } from "react"


type Props = {}

export const Region = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {region} = useAppSelector(state => state.form.data)

  const itemRegion = items.find(obj => obj.id === Number(region.value)) || null
  const itemMainTown = items.find(obj => obj.id === itemRegion?.mainTownId) || null
  
  console.log(items)

  useEffect(() => {
    dispatch(setRegion({region: itemRegion, mainTown: itemMainTown}))
  }, [itemRegion, itemMainTown])

  return (
    <>
    <SelectSingle
        label="Регион"
        items={items}
        item_id={"id"}
        item_desc={"fullName"}
        value={region.value}
        onChange={value => dispatch(setData({
          region: {
            type: "term",
            value: String(value)
          }
        }))}
    />
    </>
  )
}
