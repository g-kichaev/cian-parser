import axios from "axios"
import {createAsyncThunk} from "@reduxjs/toolkit"
import { CianParseItem } from "./types"



type ParseProps = {
  url: string
  mainTownId?: number
}

export const parseCian = createAsyncThunk("parse/cian",
  async ({url, mainTownId}: ParseProps): Promise<any> => {
    const response = await axios.post("https://fuck-cors.vercel.app/api", {data:{"URL": url}})
    const offers = parseOffers(response, mainTownId)
    const links = parsePaginations(response)
    // console.log(links)
    return {offers, links}
  }
)

const parseOffers = (response: any, mainTownId?: number) => {
  const parser = new DOMParser()
  const responseDocument = parser.parseFromString(response.data, 'text/html')
  const scriptObjects = [...responseDocument.getElementsByTagName('script')]

  const scriptObject = scriptObjects.find(obj => {
    const firstText = obj.text.slice(0, 200)
    return firstText.includes("serp") && firstText.includes(".concat")
  })
  const scriptText = scriptObject ? scriptObject.text : ""
  const start = "concat("
  const end = ")"

  let json = ""
  const startIndex = scriptText.indexOf(start) + start.length
  if (startIndex !== -1) {
    const endIndex = scriptText.lastIndexOf(end) - 1
    if (endIndex !== -1) {
      const extracted = scriptText.substring(startIndex, endIndex + end.length)
      json = extracted
    }
  }
  const array = JSON.parse(json)
  const cianOffers = array.find((obj: any) => obj.key === "initialState")?.value?.results?.offers as CianParseItem[]
  if (mainTownId) {
    return cianOffers.filter(obj => !obj.geo.address.some(address => address.id === mainTownId))
  }
  return cianOffers
}




const parsePaginations = (response: any) => {
  const parser = new DOMParser()
  const responseDocument = parser.parseFromString(response.data, 'text/html')
  const scriptObjects = [...responseDocument.body.querySelectorAll("div[data-name='PaginationSection'] a")].map(obj => obj.getAttribute("href"))
  return scriptObjects
  // const scriptObject = scriptObjects.find(obj => {
  //   const firstText = obj.text.slice(0, 200)
  //   return firstText.includes("serp") && firstText.includes(".concat")
  // })
  // const scriptText = scriptObject ? scriptObject.text : ""
  // const start = "concat("
  // const end = ")"

  // let json = ""
  // const startIndex = scriptText.indexOf(start) + start.length
  // if (startIndex !== -1) {
  //   const endIndex = scriptText.lastIndexOf(end) - 1
  //   if (endIndex !== -1) {
  //     const extracted = scriptText.substring(startIndex, endIndex + end.length)
  //     json = extracted
  //   }
  // }
  // const array = JSON.parse(json)
  // const cianOffers = array.find((obj: any) => obj.key === "initialState")?.value?.results?.offers as CianParseItem[]
  // if (mainTownId) {
  //   return cianOffers.filter(obj => !obj.geo.address.some(address => address.id === mainTownId))
  // }
  // return cianOffers
}
