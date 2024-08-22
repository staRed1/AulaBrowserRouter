import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/index'
import Oferta from './oferta'
import Produtos from './produtos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/oferta' element={<Oferta/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)



