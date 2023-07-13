import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { LogoHdS } from './Componentes/LogoHdS'
import { TablaItem } from './Componentes/TablaItem'
import img from '../assets/hds.png';
import { TablaChipapijas } from './Componentes/TablaChipapijas';
export const App = () => {
  return (
    <>
    <Box width={'100vw'} height={'100vh'} position={'absolute'} sx={{opacity:'.6',backgroundPosition: 'center',width:'100vw',height:'100vh',backgroundSize: 'cover',backgroundImage:`url(${img})`}}>
    </Box>
    <Box position={'relative'} display={'flex'} justifyContent={'center'}>
        <Stack direction={'column'} spacing={10}>
            <TablaItem/>
            <TablaChipapijas/>
        </Stack>
    </Box>
    </>
  )
}
