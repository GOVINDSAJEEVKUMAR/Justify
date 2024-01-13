import React from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import {useSelector} from "react-redux"
import Login from './components/LogSign/Login'
import SigIn from './components/LogSign/Signup'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Prod from "./Dashboard/Prod"


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path ="" element={<Prod/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/sigup" element={<SigIn/>}/>
          
          <Route element={<Navbar/>}>
          
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
