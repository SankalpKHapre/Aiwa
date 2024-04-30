import React,{useState,useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom'

const AddProduct = () => {

    const [allProducts,setAllProducts] = useState([])
    const [category,setCategory] = useState('Industrial')
    const fetchInfo = async()=>{
        try {
            const response = await fetch('http://localhost:3000/allproducts');
            const data = await response.json();
            console.log(data);
                // const categoricalData = data.filter((item,i)=>item.category ===category)
                // setAllProducts((prevData)=>{...prevData,categoricalData});
                // console.log(categoricalData.map(item=>item));
                setAllProducts(data)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
    }
    useEffect(()=>{
        fetchInfo()
    },[category])

    const handleCategory = (data)=>{
        setCategory(data)
    }
    console.log(category);
   return (
    <div className='flex flex-col w-[100%] h-auto ' >
        <div className='flex flex-row w-[100%] mx-[70vh] my-[50px]'>
            <div onClick={()=>{handleCategory('Industrial')}} className='mx-5 rounded-lg border cursor-pointer px-5'>Industrial</div>
            <div onClick={()=>{handleCategory('Retail')}} className='mx-5 rounded-lg border cursor-pointer px-5'>Retail</div>
            <div onClick={()=>{handleCategory('TMS')}} className='mx-5 rounded-lg border cursor-pointer px-5'>TMS</div>
            <div onClick={()=>{handleCategory('Weighbridge')}} className='mx-5 rounded-lg border cursor-pointer px-5'>Weighbridge</div>
        </div>
      <div className="flex flex-row justify-between width-[60vh] p-5">
        <p>Name</p>
        <p>Description</p>
        <p>Category</p>
      </div>
      <div className="flex flex-col `">
        <hr className='w-full' />
        {allProducts.map((product,index)=>{
          return <><div key={index} className="flex flex-row justify-between p-5">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default AddProduct