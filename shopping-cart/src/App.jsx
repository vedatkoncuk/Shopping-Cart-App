import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'

function App() {

  return (
    <div>
      <h1>Navbar</h1>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
