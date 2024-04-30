import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Admin from './Components/Admin'

function App() {

  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
