import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Results from './results/Results.jsx'
import Login from './Login&Register/Login.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/results' element={<Results />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
