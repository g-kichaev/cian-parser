import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import formSlice from "./form";
import parseSlice from "./parse";
import exportSlice from "./export"

export const store = configureStore({
    reducer: {
        form: formSlice,
        parse: parseSlice,
        export: exportSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
