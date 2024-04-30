import React from 'react'

const ContactUs = (props) => {
  return (
    <section ref={props.myRef} className=' flex bg-white m-5 align-center justify-center'>
    <div className="w-[50%]  p-10">
        <h1 className="text-3xl text-center font-bold">Contact Us</h1>
        <p className="m-5 ml-[20%] pl-5 w-[60%] text-base/loose text-center">
            EAGLE DIGITAL SCALES,
            "3rd Floor, NKY Tower,
            Ajni Square, Wardha Road,
            Nagpur- 440010 Maharashtra, INDIA Tel : +91 - 712 - 2252303 / 2252404
            Mobile No. +91-98222 00516
        </p>
    <button className='m-5 ml-[36%] text-white bg-black p-5 text-center w-[30vh] rounded-2xl cursor-pointer border '>Click Here!</button>

      
    </div>
  </section>
  )
}

export default ContactUs