import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import { CianParseItem } from "../parse/types"

const initialState = {
    selectedItems: [] as CianParseItem[],
}
const exportSlice = createSlice({
    name: 'export',
    initialState,
    reducers: {
        setSelection(state, action: PayloadAction<CianParseItem>) {

            if (state.selectedItems.find(obj => obj.id === action.payload.id)) {
                state.selectedItems = state.selectedItems.filter(obj => obj.id !== action.payload.id)
            } else {
                state.selectedItems.push(action.payload)
            }
        },
        exportItems(state) {
            if (state.selectedItems.length !== 0) {
                exportXLS(state.selectedItems.map(obj => {
                    return {
                        title: obj.title,
                        description: obj.description
                    }
                }))
            }
        },
    },
})

export const {
    setSelection,
    exportItems,
} = exportSlice.actions

export default exportSlice.reducer


const exportXLS = (csvData: unknown[]) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, "Аналоги" + fileExtension);
}