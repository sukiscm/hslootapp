import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, esES } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { DialogSelectPersona } from './DialogSelectPersona';
import ItemPool from '../../assets/ItemPool';
export const TablaItem = ({setTrigger,trigger}) => {
  const [DialogVisibility, setDialogVisibility] = useState({visibile:false,itemInfo:''})
  const cerrarDialog=()=>{
    setDialogVisibility({visible:false})
  }
  useEffect(() => {
    setTrigger(!trigger)
  }, [DialogVisibility])
  
    const customGridToolB=()=>{
        return(
            <GridToolbarContainer >
      <GridToolbarColumnsButton  sx={{color:'white'}}/>
      <GridToolbarFilterButton sx={{color:'white'}}/>
      <GridToolbarDensitySelector sx={{color:'white'}}/>
      <GridToolbarExport sx={{color:'white'}}/>
    </GridToolbarContainer>
            )
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 170,headerAlign: 'center',align:'center' },
        { field: 'nombre', headerName: 'NOMBRE', width: 300,headerAlign: 'center',align:'center' },
        { field: 'nivel', headerName: 'MODO', width: 170,headerAlign: 'center',align:'center'},
        { field: 'origen', headerName: 'JEFE', width: 500,headerAlign: 'center',align:'center' },
        { field: 'tipo', headerName: 'CASILLA', width: 300,headerAlign: 'center',align:'center' },
        { field: 'ENTREGAR', headerName: 'ENTREGAR', width: 170,  renderCell: (params) => (
          <Button  variant='contained' color='warning' onClick={e=>setDialogVisibility({visibile:true,itemInfo:params.row})}>
            Entregar A:
          </Button>
        ),headerAlign: 'center',align:'center' },

    ]
  return (
    <Box  sx={{width:'80vw',height:'50vh',backgroundColor:'wh'}}>
        <Typography variant='h3' color={'white'}>
            Tabla Items
        </Typography>
    <DataGrid
    density="standard"
    columnVisibilityModel={{
      // Hide columns status and traderName, the other columns will remain visible
      id: false,
      
    }}   
    sx={{backgroundColor:'#263238',color:'black',fontWeight:'500','.MuiToolbar-root':{color:'white'},'.MuiDataGrid-main':{backgroundColor:'#607d8b'}}}
    columns={columns}
    rows={ItemPool}
    slots={{
        toolbar:customGridToolB,
      }}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
    />
    {DialogVisibility.visibile===true?<DialogSelectPersona visible={DialogVisibility.visibile} cerrar={cerrarDialog} itemInfo={DialogVisibility.itemInfo}/>:<></>}
    
</Box>
  )
}
