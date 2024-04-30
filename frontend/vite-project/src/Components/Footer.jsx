import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-sm">COmpany Details</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-sm">Email: </p>
          <p className="text-sm">Phone: </p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="flex">
            <li className="mr-4"><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li className="mr-4"><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-sm text-center">&copy; 2022 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}
  


export default Footer