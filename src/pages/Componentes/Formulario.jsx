import React from 'react'
import { AutocompletarBich } from './AutocompletarBich'
import { InputComentario } from './InputComentario'

export const Formulario = ({setFormData}) => {
  return (
    <>
      <AutocompletarBich setFormData={setFormData}/>
      <InputComentario setFormData={setFormData}/>
    </>
  )
}
