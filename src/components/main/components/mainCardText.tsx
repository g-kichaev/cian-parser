// UI
import { Button, Stack, Typography } from "@mui/material"
// Компоненты
// Типы
import { CianParseItem } from "../../../store/parse/types"
import { useAppSelector } from "../../../store"


type Props = {
    item: CianParseItem
}
export const MainCardText = ({item}: Props) => {
  const Currency = (number: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number)

  const {mainTown} = useAppSelector(state => state.form.region)
  const {lat, lng} = item.geo.coordinates

  const coordinates = `${lat}, ${lng}`
  const fullAddress = item.geo.address
    // .filter(obj => obj.type === "location")
    .map(obj => obj.shortName)
    .join(", ")
  
  const getDistance = (latA?: number, longA?: number, latB?: number,  longB?: number) => {
    if (!latA || !longA || !latB || !longB) return null
    const toRadians = (degrees: number) => (degrees * Math.PI) / 180
    const earthRadiusKm = 6371 // Радиус Земли в километрах
    const dLat = toRadians(latB - latA)
    const dLon = toRadians(longB - longA)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(latA)) * Math.cos(toRadians(latB)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = earthRadiusKm * c
    return distance.toFixed(2) + " км"
  }

  const distance = mainTown ? getDistance(mainTown.lat, mainTown.lng, lat, lng) : null

  return (
    <Stack direction={"column"} position={"relative"} flex={1}>
      <Typography variant="body2" width={"95%"}><strong>Адрес</strong> - {fullAddress}</Typography>
      {distance && <Typography variant="body2"><strong>Расстояние до {mainTown?.name}</strong> - {distance ? distance : "-"}</Typography>}
      {!distance && <Typography variant="body2"><strong>Главный город региона</strong></Typography>}

      <Stack direction={"row"} justifyContent={"space-between"} height={"100%"}>
        <Typography variant="caption">
          {item.totalArea ? item.totalArea + " м²" : "-"}
        </Typography>

        <Typography variant="caption">
          {item.totalArea ? Currency(item.bargainTerms.priceRur / parseFloat(item.totalArea)) + " / м²" : "-"}
        </Typography>
        <Typography variant="caption">
          {Currency(item.bargainTerms.priceRur)}
        </Typography>
      </Stack>
      
      
      {/* <Typography variant="caption" sx={{whiteSpace: "break-spaces", overflowY: "auto"}}>
        {item.description}
      </Typography> */}
      <Button href={item.fullUrl} sx={{ fontSize: 12, mb: 0, mx: "auto"}} variant="outlined">
        Ссылка на Циан
      </Button>
    </Stack>
  )
}
