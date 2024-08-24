// Компоненты
import { InputAdornment, Stack, SxProps, TextField } from "@mui/material"


type Props = {
  label: string
  value_from?: number | null
  value_to?: number | null
  onChange: (props: {from?: number, to?: number}) => void
  endAdornment?: string
  disabled?: boolean
  sx?: SxProps
}

export const RangeField = ({label, value_from, value_to, onChange, endAdornment, disabled, sx}: Props) => {

  return (
    <Stack direction={"row"} gap={2} sx={sx}>
    <TextField
        label={label + " от"}
        value={value_from || ""}
        onChange={e => onChange({
          from: typeof parseFloat(e.target.value) === "number" ? parseFloat(e.target.value) : undefined,
          to: value_to || undefined
        })}
        InputProps={{
          endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
        }}
        disabled={disabled}
    />
    <TextField
      label={label + " до"}
      value={value_to || ""}
      onChange={e => onChange({
        from: value_from || undefined,
        to: typeof parseFloat(e.target.value) === "number" ? parseFloat(e.target.value) : undefined
      })}
      InputProps={{
        endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
      }}
      disabled={disabled}
    />
    </Stack>
  )
}
