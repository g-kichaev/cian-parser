import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    SxProps
} from "@mui/material"

interface Props<T> {
    label: string
    value: string[]
    items: T[]
    item_id: keyof T | ((item: T) => any)
    item_desc: keyof T| ((item: T) => any)
    onChange: (value: string[]) => void
    disabled?: boolean
    first_object?: {
        id: string | null,
        desc: string
    }
    sx?: SxProps
}

export const SelectMulti = <T,>({
    label,
    value,
    onChange,
    items,
    item_id,
    item_desc,
    disabled,
    first_object,
    sx
}: Props<T>) => {

    const empty_key = first_object?.id || ''
    const empty_text = first_object?.desc || "Не выбрано"

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        const array_value = typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value
        onChange(array_value)
    }

    return (
        <Box sx={sx}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <FormControl sx={{width: "100%"}} >
                    <InputLabel color={"primary"}>{label}</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={value}
                        disabled={disabled || items.length === 0}
                        label={label}
                        onChange={handleChange}
                        renderValue={(selected) => {
                            return (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {selected.map((value) => {
                                const item = items.find(item => (typeof(item_id) === "function" ? item_id(item) : item[item_id]) === value)
                                const text = item && (typeof(item_desc) === "function" ? item_desc(item) : item[item_desc])
                                return (
                                <Chip key={value} label={text} sx={{p:0, mt: "0.2rem", borderRadius: 0, height: "1.5rem"}}/>
                                )
                                })}
                            </Box>
                          )}}
                    >
                        {first_object && <MenuItem value={empty_key}>{empty_text}</MenuItem>}
                        {items.map((item) => (
                            <MenuItem 
                                key={typeof(item_id) === "function" ? item_id(item) : item[item_id] } 
                                value={typeof(item_id) === "function" ? item_id(item) : item[item_id]}
                            >
                                {typeof(item_desc) === "function" ? item_desc(item) : item[item_desc]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    )
}