import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Header from './components/Header/Header'

const App = () => {
  return (
   <>
   <Header/>
   <Routes>

    <Route path='/' element={<Home />}  />
    <Route path='/Contacts' element={<Contacts />}/>
    <Route path='/About' element={<About />}/>

   </Routes>
   </>
  )
}

export default App
