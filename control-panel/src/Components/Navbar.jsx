import React from 'react'
import logo from '../assets/logoaiwa.png'

const Navbar = () => {
  return (
    <div className='flex flex-row bg-dark/95'>
        <div className=''>
            <img className='p-3 h-20 w-25 rounded-3xl' src={logo} alt="" />
        </div>
        <div className='text-center pt-5 text-white text-2xl font-bold pl-3 mb-3 pb-1'>Admin Panel</div>
    </div>
  )
}

export default Navbar