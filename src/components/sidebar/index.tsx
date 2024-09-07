// UI
import { Link, Stack } from "@mui/material";
// Redux-toolkit
import { useAppDispatch, useAppSelector } from "../../store";
// Компоненты
import { Region } from "./components/formFields/main/region";
import { CategoryDeal } from "./components/formFields/main/categoryDeal";
import { FlatType } from "./components/formFields/flatOnly/flatType";
import { FlatRoom } from "./components/formFields/flatOnly/flatRoom";
import { SuburbanHeating } from "./components/formFields/suburbanOnly/suburbanHeating";
import { SuburbanCommunication } from "./components/formFields/suburbanOnly/сommunication";
import { SuburbanType } from "./components/formFields/suburbanOnly/suburbanType";
import { OfficeType }  from "./components/formFields/commercialOnly/officeType";
import { Price } from "./components/formFields/main/price";
import { Area } from "./components/formFields/main/area";
import { ButtonSearch } from "./components/buttonSearch";
import { ButtonExport } from "./components/buttonExport";
import { ButtonHide } from "./components/buttonHide";


type Props = {}
export const Sidebar = ({}: Props) => {
  const dispatch = useAppDispatch()
  
  const {showMore} = useAppSelector(state => state.form)

  return (
    <Stack
        direction={"row"}
        gap={1} 
        sx={theme => {return{
            background: "hsl(0,0%,10%)",
            p:"1rem",
            width: showMore ? "35rem" : "auto",
            [theme.breakpoints.down('sm')]: {
                p: "0.5rem",
                width: showMore ? "100vw" : "auto",
            },
        }}}
    >
        {showMore &&
            <Stack
                sx={theme => {return{
                    width: "100%",
                    gap:"2rem",
                    [theme.breakpoints.down('sm')]: {
                        gap: "1rem",
                    },
                }}} 
            >
                <Region />
                <CategoryDeal />
                {/* <Category /> */}
                {/* <FlatType /> */}
                {/* <FlatRoom /> */}
                {/* <SuburbanType /> */}
                {/* <SuburbanHeating /> */}
                {/* <SuburbanCommunication /> */}
                {/* <OfficeType /> */}
                {/* <Price/> */}
                {/* <Area/> */}
            
                <ButtonSearch />

                {/* <Link variant="caption" alignSelf={"center"} sx={{wordWrap: "break-word"}}>
                    Ссылка на поиск Циан
                </Link> */}

                <ButtonExport />
            </Stack>
        }
        <ButtonHide />
    </Stack>
  )
}
