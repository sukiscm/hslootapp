import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import guildppl from '../../assets/guildppl';

export const AutocompletarBich = ({setFormData}) => {
  return (
    <Autocomplete
    onChange={(e,newValue)=>setFormData((prevFormData)=>({
        ...prevFormData,
        ppl:newValue.label
    }))}
    disablePortal
    id="combo-box-demo"
    sx={{mt:2}}
    options={guildppl}
    renderInput={(params) => <TextField {...params} label="Selecciona A la Persona" />}
  />
  )
}
