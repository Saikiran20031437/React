import { Routes } from 'react-router-dom'
  import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <h2>React Routing</h2>
      <Home />
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/About" element = {<About />}></Route>
        <Route path="/Contact" element = {<Contact />}></Route>
      </Routes>
      <About />
      <Contact />
    </div>
  )
}

