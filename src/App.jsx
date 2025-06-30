import { Route, Routes } from 'react-router'
import './App.css'
import DetailPage from './components/DetailPage'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:animalId" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
