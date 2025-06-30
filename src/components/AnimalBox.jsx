import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router"


const AnimalBox = ({ data }) => {
  const navigate = useNavigate()

  return (
    <Box className="w-[100px] h-[100px] border-1 border-zinc-300 rounded-[24px] flex flex-col justify-center items-center"
    onClick={() => navigate(`/detail/${data.id}`)}
    >
      <Typography variant='h6'>{data.name}</Typography>
      <Typography variant='body1'>{data.description}</Typography>
    </Box>
  )
}

export default AnimalBox