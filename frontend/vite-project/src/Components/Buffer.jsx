import React from 'react'
import Navbar from './Navbar'
import AddProduct from './AddProduct'
import { Route, Routes } from 'react-router-dom'

const Buffer = () => {
  return (
    <div>
        <Navbar/>
            <Routes>
                <Route path='/getproducts' element={<AddProduct/>}/>
            </Routes>
    </div>
  )
}

export default Buffer