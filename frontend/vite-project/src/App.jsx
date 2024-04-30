import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import styles from './style'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Aboutus from './Components/Aboutus'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import AddProduct from './Components/AddProduct'
import Buffer from './Components/Buffer'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const myRef = useRef(null)
  const contactRef = useRef(null)


  const scrolltoRef = ()=>{
    myRef.current.scrollIntoView({behavior:'smooth'})
  }
  const scrolltoContact = ()=>{
    contactRef.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className=''>
      <div className=''>
        <div className='' >
      
          <Navbar scrolltoRef={scrolltoRef} scrolltoContact={scrolltoContact}/>
            <Routes>
                <Route path='/getproducts' element={<AddProduct/>}/>
                <Route path='/' element={
                  <div>
                    <Hero/>
                    <Aboutus myRef={myRef} />
                    <Products/>
                    <ContactUs myRef={contactRef}/>
                  </div>
                }/>
            </Routes>
            <Footer/>

        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>

          </div>
      </div>

    </div>
  )
}

export default App
