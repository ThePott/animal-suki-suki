import { Box } from '@mui/material'
import React from 'react'
import AnimalBox from "./AnimalBox"
import dataArray from "../dataArray.json"
const HomePage = () => {

  return (
    <Box className='flex flex-wrap gap-[24px]'>
      {dataArray.map((data) => <AnimalBox key={data.id} data={data} />)}
    </Box>
  )
}

export default HomePage