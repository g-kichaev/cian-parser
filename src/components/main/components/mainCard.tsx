// UI
import { Box, Button, Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";
// Компоненты
import { MainCardCarousel } from "./mainCardCarousel";
// Типы
import { CianParseItem } from "../../../store/parse/types";
import { useAppDispatch } from "../../../store";
import { setSelection } from "../../../store/export";
import { MainCardText } from "./mainCardText";


type Props = {
    item: CianParseItem
    selected?: boolean
}
export const MainCard = ({item, selected=false}: Props) => {
  const dispatch = useAppDispatch()
  
  const urls = item?.photos.map(obj => obj.fullUrl)

  return (
    <Card 
      variant="outlined" 
      sx={theme => {return{
        position: "relative",
        height: "20rem",
        padding: "0.5rem",
        background: "hsl(0,0%,15%)",
        outline: selected ? `0.2rem solid ${theme.palette.primary.dark}` : "none",
        outlineOffset: "-0.2rem"
      }}}
    >
      <Checkbox 
        sx={{position: "absolute", right: 0, top: 0}}
        size="small"
        onClick={() => {
          console.log({selected: item})
          dispatch(setSelection(item))
        }}
      />
      <Stack direction={"row"} height={"100%"} gap={1}>
        <MainCardCarousel urls={urls || []}/>
        <MainCardText item={item}/>
      </Stack>
    </Card>
  )
}
