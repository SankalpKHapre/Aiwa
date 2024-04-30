import React from 'react'

const Aboutus = (props) => {
  return (
    <div ref={props.myRef} className='bg-white m-5 p-20 pl-[25vh] pr-[50vh]'>
        <div className='text-xl text-base/loose'>
            <h1 className='font-bold text-3xl pb-5 '>About Us</h1>
            Introduction
AIWA Group is engaged in the manufacture, sales and after-sales service of electronic weighing systems and solutions through its channel partners spread throughout India.

Established in 1994, AIWA has distinguished itself as a premier organization having successfully executed many prestigious, state of the art projects for various industries in India as well as abroad. AIWA products are a result of trail-blazing research & development and stringent quality checks which make them conform to all international quality standards.
        </div>
        <button className=' my-5 mx-3 border border-blue-700 rounded-xl p-2 text-blue-700 hover:bg-blue-700 text-white duration-100'>Read More...</button>
    </div>
  )
}

export default Aboutus