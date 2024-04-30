import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {


  return (
    <div className='flex flex-row justify-between bg-gradient-to-r from-slate-700 to-slate-900 w-full overflow-hidden'>
      <div className=' cursor-pointer flex m-10 justify-start'>
      <Link to={'/'}> <div className='text-3xl text-white font-bold'>Aiwa</div></Link> 
      </div>
    <div className='flex flex-row font-bold text-white '>
      <Link to={'/getproducts'}><div className='cursor-pointer flex m-10'>Products</div></Link>
      <div onClick={()=>{props.scrolltoRef()}} className='cursor-pointer flex m-10'>About Us</div>
      <div  onClick={()=>{props.scrolltoContact()}} className='cursor-pointer flex m-10'>Contact Us</div>
      <div  className='cursor-pointer flex m-10'>Partners</div>
    </div>
    </div>
  )
}

export default Navbar