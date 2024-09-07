// UI
import { Button } from "@mui/material"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { exportItems } from "../../../../store/export"


type Props = {}
export const ButtonExport = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {selectedItems} = useAppSelector(state => state.export)

  return (
    <Button 
      variant={"outlined"} 
      disabled={selectedItems.length === 0} 
      onClick={() => {
        console.log(selectedItems)
        dispatch(exportItems())
      }}
    >
        Экспорт в Excel
    </Button>
  )
}
