import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Media from './pages/Media'
import Sustainability from './pages/Sustainability'
import OurServices from './pages/OurServices'
import Contact from './pages/Contact'
import PetroleumImport from './Components/PetroleumImport'
import Welcome from './Components/Welcome'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path='/ourservice' element={<OurServices />}/>
      <Route path='/media' element={<Media />}/>
      <Route path='/sustainability' element={<Sustainability />}/>
      <Route path='/AboutUs' element={<AboutUs />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/Welcome' element={<Welcome />}/>
      <Route path='/petroleumproductsimportation' element={<PetroleumImport />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
