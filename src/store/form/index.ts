import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Form } from "./types";
import { Item as Region } from "../../components/sidebar/components/formFields/main/region/types";

const dataDefault: Form = {
    _type: "suburbansale",
    engine_version: {
        type: "term",
        value: "2"
    },
    region: {
        type: "term",
        value: "1"
    },
}
const initialState = {
    data: dataDefault,
    region: {
        region: null as null | Region,
        mainTown: null as null | Region,
    },
    showMore: true,
    
}
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Partial<Form> | null>) {
            if (action.payload === null) {
                state.data = dataDefault
            } else {
                const new_data = {...state.data, ...action.payload}
                state.data = new_data
            }
        },
        setRegion(state, action: PayloadAction<typeof state.region>) {
            if (action.payload === null) {
                state.region = initialState.region
            } else {
                state.region = action.payload
            }
        },
        toggleShowMore(state) {
            state.showMore = !state.showMore
        },
    },
})

export const {
    setData,
    setRegion,
    toggleShowMore
} = formSlice.actions

export default formSlice.reducer

/*
https://api.cian.ru/search-offers/v2/search-offers-desktop/
POST
{
    "jsonQuery": {
        "_type": "suburbansale",
        "engine_version": {
            "type": "term",
            "value": 2
        },
        "region": {
            "type": "terms",
            "value": [
                2
            ]
        },
        "object_type": {
            "type": "terms",
            "value": [
                1,
                2,
                4
            ]
        },
        "geo": {
            "type": "geo",
            "value": []
        }
    }
}

{
    "jsonQuery": {
        "_type": "suburbansale",
        "engine_version": {
            "type": "term",
            "value": 2
        },
        "region": {
            "type": "terms",
            "value": [
                2
            ]
        },
        "currency": {
            "type": "term",
            "value": 2
        },
        "object_type": {
            "type": "terms",
            "value": [
                3,
                4
            ]
        }
    }
}

{
    "jsonQuery": {
        "_type": "flatsale",
        "engine_version": {
            "type": "term",
            "value": 2
        },
        "region": {
            "type": "terms",
            "value": [
                2
            ]
        },
        "currency": {
            "type": "term",
            "value": 2
        },
        "building_status": {
            "type": "term",
            "value": 2
        },
        "with_newobject": {
            "type": "term",
            "value": true
        },
        "room": {
            "type": "terms",
            "value": [
                2,
                3,
                4
            ]
        },
        "price": {
            "type": "range",
            "value": {
                "gte": 50000,
                "lte": 50000000
            }
        }
    }
}
*/