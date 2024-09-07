// Компоненты
import { SelectSingle } from "../../../../../lowLevel/selectSingle"
import { itemsDeal, itemsCategory } from "./items"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../../../store"
import { setData } from "../../../../../../store/form"
import { useEffect, useState } from "react"


type Props = {}

export const CategoryDeal = ({}: Props) => {
  const dispatch = useAppDispatch()

  const [dealId, setDealId] = useState<string | null>(itemsDeal[0].id)
  const [categoryId, setCategoryId] = useState<string | null>(itemsCategory[0].id)

  useEffect(() => {
    if (!dealId || !categoryId) return
    dispatch(setData({
      _type: categoryId+dealId,
    }))
  }, [dealId, categoryId]);

  return (
    <>
    <SelectSingle
      label="Тип сделки"
      items={itemsDeal}
      item_id={"id"}
      item_desc={"desc"}
      value={dealId}
      onChange={value => setDealId(value)}
    />
    <SelectSingle
      label="Категория"
      items={itemsCategory}
      item_id={"id"}
      item_desc={"desc"}
      value={categoryId}
      onChange={value => setCategoryId(value)}
    />
    </>
  )
}