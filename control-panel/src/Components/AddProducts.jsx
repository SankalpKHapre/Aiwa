import React, { useState } from 'react'

const AddProducts = () => {

  const [details,setDetails] = useState({
    name:'',
    id:'',
    description:'',
    category:'',
  })

  const addProduct = async()=>{
    let product = details

      await fetch('http://localhost:3000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log(data);
                data.success?alert('Product Added'):alert('Failed')
            })
        
}

  const changeHandler = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
    
  }
  console.log(details);
  return (
    <div className='m-6 p-6 border w-[100vh]'>
        <div>
        <div className='mt-10'>
            <p className='text-xl my-2 '>Product Name</p>
            <input onChange={changeHandler} name='name' className='text-xl p-2 border' type="text" placeholder='Enter Here...' />
        </div>

        </div>
        <div className='mt-10'>
            <p className='text-xl' >Description</p>
            <textarea onChange={changeHandler} name='description' className='w-[500px] text-xl p-2 border w-' type="textbox" placeholder='Enter Here...' />
        </div>
        <div className="mt-10">
                <p className='text-xl'>Product Category</p>
                <select onChange={changeHandler}  name='category' className='text-xl border'>
                    <option value="Industrial">Industrial</option>
                    <option value="Weigbridge">Weighbridge</option>
                    <option value="TMS">TMS</option>
                    <option value="Retail">Retail</option>
                </select>
            </div>
        <button className='m-8 border w-[100px] rounded-xl' onClick={()=>addProduct()}>Add</button>
    </div>
    
  )
}

export default AddProducts