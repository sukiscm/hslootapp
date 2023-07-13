import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, esES } from '@mui/x-data-grid'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const TablaChipapijas = () => {
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
        { field: 'nombre', headerName: 'NOMBRE', width: 170 },
        { field: 'nombreitem', headerName: 'ITEM', width: 500 },
        { field: 'comentario', headerName: 'COMENTARIO', width: 500 },
        { field: 'borrar', headerName: 'BORRAR', width: 100,renderCell: (params) => (
            <Button  variant='contained' color='error'>
              <DeleteOutlineIcon/>
            </Button>
          ), },

    ]
  return (
    <Box  sx={{width:'80vw',height:'50vh',backgroundColor:'wh'}}>
    <Typography variant='h3' color={'white'}>
        Tabla Guild <Button variant='contained' color='error' startIcon={<DeleteOutlineIcon/>}>Borrar Tabla</Button>
    </Typography>
    
<DataGrid
density="compact"
sx={{backgroundColor:'#263238',color:'#cfd8dc','.MuiToolbar-root':{color:'white'},'.MuiDataGrid-main':{fontSize:'1.2rem'}}}
columns={columns}
rows={[{id:1,nombre:'Suna',nombreitem:'pijotaDdosMetros'}]}
columnVisibilityModel={{
    // Hide columns status and traderName, the other columns will remain visible
    id: false,
    
  }}      
    slots={{
    toolbar:customGridToolB,
  }}
  localeText={esES.components.MuiDataGrid.defaultProps.localeText}
/>
</Box>
  )
}
