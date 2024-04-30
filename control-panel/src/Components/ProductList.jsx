import React, { useEffect, useState } from 'react'
import cross from '../assets/cross_icon.png'

const ProductList = () => {

  const [allProducts,setAllProducts] = useState([])
  const fetchInfo = async()=>{
    await fetch('http://localhost:3000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)})
  }
  useEffect(()=>{
    fetchInfo()
  },[])

  const removeProduct = async(id)=>{

    await fetch('http://localhost:3000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo()

  }

  return (
    <div className='flex flex-col w-[80%] h-auto ' >
      <div className="flex flex-row justify-between width-[60vh] p-5">
        <p>Name</p>
        <p>Description</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="flex flex-col `">
        <hr className='w-full' />
        {allProducts.map((product,index)=>{
          return <><div key={index} className="flex flex-row justify-between p-5">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img className='cursor-pointer' onClick={()=>removeProduct(product.id)} src={cross} alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ProductList