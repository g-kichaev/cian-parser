// UI
import { Alert, Box, Card, CardContent, CircularProgress, Stack, Typography } from "@mui/material";
// Компоненты
import { MainCard } from "./components/mainCard";
// Redux-toolkit
import { useAppSelector } from "../../store";


type Props = {
    width?: string | number
}
export const Main = ({width}: Props) => {
  const {showMore} = useAppSelector(state => state.form)
  const {items, status, statusText} = useAppSelector(state => state.parse)
  const {selectedItems} = useAppSelector(state => state.export)

  return (
    <Stack 
      direction={"column"}
      width={width || "100%"}
      position={"relative"} 
      sx={theme=>{return{
          background: "hsl(0,0%,12%)",
          p:"1rem",
          [theme.breakpoints.down('sm')]: {
            display: showMore ? "none" : "block",
            width: "100vw",
            p: "0.5rem"
        },
      }}}
    >
      {items && items.length !== 0 && status === "ok" && 
        <Box 
          sx={theme => {return{
            display: "grid",
            gap:"1rem",
            width: "100%",
            overflowX: "hidden",
            overflowY: "scroll",
            gridTemplateColumns: "repeat(2, 1fr)",
            [theme.breakpoints.down('lg')]: {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}}
        >
          {items.map(item => <MainCard key={item.id} item={item} selected={!!selectedItems.find(obj => obj.id === item.id)}/>)}
        </Box>
      }

      {status === "pending" &&     
        <Box mx={"auto"} my={"auto"}>
          <CircularProgress />
        </Box>      
      }

      {status === "error" &&     
        <Alert severity="error">{statusText}</Alert>     
      }
  </Stack>
  )
}
