// UI
import { Button } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../../../store"
import { exportItems } from "../../../../store/export"
import { toggleShowMore } from "../../../../store/form"


type Props = {}
export const ButtonHide = ({}: Props) => {
  const dispatch = useAppDispatch()
  const {showMore} = useAppSelector(state => state.form)

  return (
    <Button 
      variant={"text"}
      onClick={() => dispatch(toggleShowMore())}
      sx={{minWidth: 0, width: "2rem"}}
    >
        {showMore ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
    </Button>
  )
}
