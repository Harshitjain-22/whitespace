import React, { useState } from 'react'
import Linkbutton from './Linkbutton'
import Choose from './Choose'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import WhyChooseUs from './WhyChooseUs'
import "./main.css"
let logo=require('./whitesp.png')


const Home = () => {
  const [show , setShow] = useState(true)
  function getData(data){
    setShow(data);
  }
  
  return (
    
    <div className='Home ' id='Home'>
    <Linkbutton getData={getData}/>
    { show ?
    (<>
    <div className='home'> <img src={logo} alt='whitespace' style={{height:"170px", paddingBottom:"60px"}}/></div> 
    <Services/><Choose/><About/><Contact/>
    </>):
    (<WhyChooseUs />)
    
    }
    
    </div>
  )
}

export default Home