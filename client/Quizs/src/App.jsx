import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Signup from './components/Authentication/Signup'
import {Routes,Route} from "react-router-dom";
import Login from './components/Authentication/Login';

function App() {
  return (
    <>
    <Routes>
    <Route path='/login' element={<Login />} />
   <Route path='/signup' element={<Signup />} />
    </Routes>
    
    </>
  )
}

export default App
