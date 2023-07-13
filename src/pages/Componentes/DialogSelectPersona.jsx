import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Formulario } from './Formulario'

export const DialogSelectPersona = ({visible,cerrar,itemInfo}) => {
  const [formData, setDormData] = useState({itemName:'',coment:'',ppl:''})
  useEffect(() => {
    if(!!itemInfo){

      setDormData((prevFormData)=>({
        ...prevFormData,
        itemName:itemInfo.nombre
      }))
    }
  }, [itemInfo])
  
  useEffect(() => {
    console.log(formData)
  }, [formData])
  
  const handleSendInfo = () => {
    if (localStorage.getItem('itemLinks')) {
      const prevArray = JSON.parse(localStorage.getItem('itemLinks'));
      localStorage.setItem('itemLinks', JSON.stringify([...prevArray, formData]));
    } else {
      localStorage.setItem('itemLinks', JSON.stringify([formData]));
    }
    cerrar()
  };
  return (
    <Dialog
    maxWidth={'90vw'}
    open={visible}
    onClose={cerrar}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Selecciona al sonaba bich"}
      <Typography color={'#e1bee7'} sx={{backgroundColor:'#455a64'}}>
        {!!itemInfo?(`${itemInfo.nombre},${itemInfo.origen},${itemInfo.tipo}`):<></>}
      </Typography>
    </DialogTitle>
    <DialogContent sx={{width:"90vw"}}>
 
        <Formulario setFormData={setDormData}/>
    </DialogContent>
    <DialogActions>
      <Button onClick={cerrar}>Disagree</Button>
      <Button onClick={handleSendInfo} autoFocus>
        Guardar
      </Button>
    </DialogActions>
  </Dialog>
  )
}
