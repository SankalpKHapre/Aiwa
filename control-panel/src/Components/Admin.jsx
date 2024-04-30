import React from 'react'
import SidePanel from './SidePanel'
import {Routes, Route}  from 'react-router-dom'
import AddProducts from './AddProducts'
import ProductList from './ProductList'
const Admin = () => {
  return (
    <div className='flex' >
            <SidePanel/>
        <Routes>
            <Route path='/addproduct' element={<AddProducts/>} />
            <Route path='/displayproducts' element={<ProductList/>} />
        </Routes>
    </div>
  )
}

export default Admin