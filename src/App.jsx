import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
// import { Route, Routes,  } from 'react-router'
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import HomePage from './components/HomePage'
import DetailPage from './components/DetailPage'




const App = () => {
  // const [selectedTab, setSelectedTab] = useState("home")

  // const navigate = useNavigate()
  // const url = selectedTab === "detail"
  // navi

  return (
    <>
      {/* <Box>
        <Tabs
          value={selectedTab}
          onChange={(event, newValue) => setSelectedTab(newValue)}
          aria-label="basic tabs example">

          <Tab sx={{ color: "white" }} label="Home" value="home" />
          <Tab sx={{ color: "white" }} label="Detail" value="detail" />

        </Tabs>
      </Box> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:animalId" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
