import React from 'react'
import { Link } from 'react-router-dom'

const SidePanel = () => {
  return (
    <div className='flex align-center w-[45vh] h-[90vh] border-2 flex flex-col'>
        <Link to={'/addproduct'}>
        <div className='cursor-pointer pt-2 rounded-[5px] h-10 m-10 border text-center'>
            Add Product
        </div>
        </Link>
        <Link to={'./displayproducts'}>
        <div className='cursor-pointer pt-2 rounded-[5px] h-10 m-10 border text-center'>
            List Product
        </div>
        </Link>

    </div>
  )
}

export default SidePanel