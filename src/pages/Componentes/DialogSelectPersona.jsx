import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Formulario } from './Formulario'

export const DialogSelectPersona = ({visible,cerrar,itemInfo}) => {
  const [formData, setFormData] = useState({itemName:'',casilla:'',coment:'',ppl:'',id:''})
  useEffect(() => {
    if(!!itemInfo){

      setFormData((prevFormData)=>({
        ...prevFormData,
        itemName:itemInfo.nombre,
        casilla:itemInfo.tipo,
      }))
    }
  }, [itemInfo])
  
  useEffect(() => {
    console.log(formData)
  }, [formData])
  
  const handleSendInfo = () => {
    if (localStorage.getItem('itemLinks')) {
      const prevArray = JSON.parse(localStorage.getItem('itemLinks'));
      const prevIdNumber = localStorage.getItem('idItem') ? parseInt(localStorage.getItem('idItem')) : 0;
      const newId = prevIdNumber + 1;
      const updatedFormData = { ...formData, id: newId}; // Crear una copia de formData con la ID actualizada
      setFormData(updatedFormData); // Actualizar el estado de formData
      localStorage.setItem('itemLinks', JSON.stringify([...prevArray, updatedFormData])); // Guardar la copia actualizada en el localStorage
      localStorage.setItem('idItem', newId.toString()); // Convertir a cadena antes de guardar
    } else {
      const initialFormData = { ...formData, id: 1 }; // Crear el objeto formData inicial con la ID
      localStorage.setItem('itemLinks', JSON.stringify([initialFormData])); // Guardar el objeto inicial en el localStorage
      localStorage.setItem('idItem', '1');
    }
  
    cerrar();
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
 
        <Formulario setFormData={setFormData}/>
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
