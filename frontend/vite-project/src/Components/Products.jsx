import React, { useState, useEffect } from 'react';
import ahws from '../assets/product_29.png';
import wim from '../assets/product_28.png';
import tms from '../assets/product_29.png';
import wb from '../assets/product_28.png';
import './Product.css'; // Assuming you have a CSS file for styling

const Products = () => {

  return (
    <section className=' flex bg-white m-5 align-center justify-center '>
      <div className="w-[full]  p-10">
        <h1 className="text-3xl text-center font-bold">Products</h1>
        <div className='flex justify-between m-5 py-[10px] w-[100%] text-base/loose text-center text-xl'>
        <p className="w-[200px]">
          Introducing TMS: Simplifying toll collection.
        </p>
        <p className='w-[200px]'>
          Explore our Weighbridge Ranges: Precision weighing solutions for diverse needs.
        </p>
        <p className='w-[200px]'>
          Discover our Industrial Range: Robust solutions for industrial applications.
        </p>
        <p className='w-[200px]'>
          Check out our Retails Range: Precision scales for commercial use.
        </p>
        </div>
          
      <button className='m-5 ml-[36%] text-white bg-black p-5 text-center w-[30vh] rounded-2xl cursor-pointer border '>Explore Now</button>

        
      </div>
    </section>
  );
};

export default Products;
