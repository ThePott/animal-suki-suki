import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import dataArray from "../dataArray.json"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import Button from '@mui/material';

const DetailPage = () => {
  const params = useParams()
  const animalIdInString = params.animalId
  // const animalIdInString = "1"
  const animalIdInNumber = Number(animalIdInString)
  const animalData = dataArray.find((data) => data.id === animalIdInNumber)

  const navigate = useNavigate()
  if (!animalIdInString) { return null }
  return (
    <Box sx= {{position: "relative"}} className="w-[600px] h-[600px] rounded-[48px] border-1 border-zinc-300 mx-auto flex flex-col justify-center">
      <Button sx={{justifyContent: "start", position: 'absolute', top: "48px", padding: 0}}
      onClick={() => navigate("/")}>
        <ChevronLeftIcon sx={{fontSize: "100px"}} />
      </Button>

      <Typography variant='h1'>{animalData.name}</Typography>
      <Typography variant='body1'>{animalData.description}</Typography>
    </Box>
  )
}

export default DetailPage