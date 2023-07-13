import { TextField } from '@mui/material'
import React from 'react'

export const InputComentario = ({setFormData}) => {
  return (
    <TextField onChange={(e)=>setFormData((prevFormData)=>({
        ...prevFormData,
        coment:e.target.value
    }))} fullWidth id="outlined-basic" label="Comentario" variant="outlined" sx={{mt:2}}/>
  )
}
