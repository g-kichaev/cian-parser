// UI
import { Button } from "@mui/material"
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { parseCian } from "../../../../store/parse/async-actions"


type Props = {}
export const ButtonSearch = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {url, region} = useAppSelector(state => state.form)

  return (
    <Button 
        variant={"outlined"} 
        disabled={!url} 
        onClick={url ? () => dispatch(parseCian({url, mainTownId: region.mainTown?.id})) : undefined}
    >
        Поиск
    </Button>
  )
}
