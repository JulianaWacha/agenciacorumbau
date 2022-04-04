import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from '../src/Pages/Home/Home'
import Destinos from '../src/Pages/Destinos/Destinos'
import Cadastro from '../src/Pages/Cadastro/Cadastro'
import Contatos from '../src/Pages/Contatos/Contatos'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Destinos" element={<Destinos />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path="/Contatos" element={<Contatos />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
