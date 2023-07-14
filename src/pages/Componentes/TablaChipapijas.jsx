import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, esES } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
export const TablaChipapijas = ({row,setTrigger,trigger}) => {
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
        { field: 'id', headerName: 'ID', width: 170, hide: true},
        { field: 'ppl', headerName: 'NOMBRE', width: 170 },
        { field: 'casilla', headerName: 'Casilla', width: 170 },
        { field: 'itemName', headerName: 'ITEM', width: 500 },
        { field: 'coment', headerName: 'COMENTARIO', width: 500 },
        { field: 'borrar', headerName: 'BORRAR', width: 100,renderCell: (params) => (
            <Button  variant='contained' color='error' onClick={e=>handleBorrarPorID(params.id)}>
              <DeleteOutlineIcon/>
            </Button>
          ), },

    ]
    const [pplObj, setPplObj] = useState([])
    useEffect(() => {
      if (localStorage.getItem('itemLinks')) {
        setPplObj(JSON.parse(localStorage.getItem('itemLinks')))
      }
    }, [])
    const handleClearLocalStorage=()=>{
      localStorage.clear()
      setTrigger(!trigger)
    }
    const handleBorrarPorID=(id)=>{
      const NewArray=row.filter(x=>x.id!=id)
      localStorage.setItem('itemLinks', JSON.stringify(NewArray))
      setTrigger(!trigger)
    }
  return (
    <Box  sx={{width:'80vw',height:'50vh',backgroundColor:'wh'}}>
    <Typography variant='h3' color={'white'}>
        Tabla Guild <Button variant='contained' color='error' startIcon={<DeleteOutlineIcon/>} onClick={handleClearLocalStorage}>Borrar Tabla</Button>
    </Typography>
    
<DataGrid
density="compact"
sx={{backgroundColor:'#263238',color:'#cfd8dc','.MuiToolbar-root':{color:'white'},'.MuiDataGrid-main':{fontSize:'1.2rem'}}}
columns={columns}
rows={row}
columnVisibilityModel={{
    // Hide columns status and traderName, the other columns will remain visible
    id: false,
    
  }}      
    slots={{
    toolbar:customGridToolB,
  }}
  localeText={esES.components.MuiDataGrid.defaultProps.localeText}
/>
<Typography sx={{fontSize:'.2rem'}}>Puto Corbi y Teoden</Typography>
<Typography sx={{fontSize:'.1rem'}}>Power By: SukisCM</Typography>

</Box>
  )
}
