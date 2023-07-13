import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LogoHdS } from './Componentes/LogoHdS'
import { TablaItem } from './Componentes/TablaItem'
import img from '../assets/hds.png';
import { TablaChipapijas } from './Componentes/TablaChipapijas';
export const App = () => {
  //La neta hice un desmadre con el codigo al final pero la mayoria esta bien, me gustaria mejorar la actulizacion a traves de estados o de , context o redux.
  //Pero la neta el Programa es algo simple y funciona como entonces no creo que sea necesario optimizar el codigo por ahora.
  const [pplObj2, setPplObj2] = useState([])
  const [trigger, setTrigger] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('itemLinks')) {
      setPplObj2(JSON.parse(localStorage.getItem('itemLinks')))
    }else{
      setPplObj2([])
    }
    console.log('move')
  }, [,trigger])
  return (
    <>
    <Box width={'100vw'} height={'100vh'} position={'absolute'} sx={{opacity:'.6',backgroundPosition: 'center',width:'100vw',height:'100vh',backgroundSize: 'cover',backgroundImage:`url(${img})`}}>
    </Box>
    <Box position={'relative'} display={'flex'} justifyContent={'center'}>
        <Stack direction={'column'} spacing={10}>
            <TablaItem setTrigger={setTrigger} trigger={trigger}/>
            <TablaChipapijas row={pplObj2} setTrigger={setTrigger} trigger={trigger}/>
        </Stack>
    </Box>
    </>
  )
}
