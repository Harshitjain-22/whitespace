import React from 'react'
import Formcd from './Formcd'
import Footer from './Footer'
import { Button } from '@mui/material'
import './main.css'

const Contact = () => {
  return (
    <div className='contact' style={{}} >
        <div style={{display:"flex",justifyContent:"space-around",paddingBottom:"100px"}}>
        <div>
         <h1 style={{paddingTop:"130px",marginTop:"0",fontfamily: "Poppins" ,paddingLeft:"70px"}}> <b>Connect and Make It Happen!</b></h1>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins"}}>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins" ,paddingTop:"10px"}}>
            <p>
             <b>
            Email: harshareddy@whitespacearchitects.in<br/>
            Phone: +1 (979) 777-8033<br/>
            Address: hyderabad, India
            </b>
            </p>
            </div>
            <div style={{paddingTop:"20px",paddingLeft:"60px"}}>
            <Button href="#text-buttons" style={{textAlign:"right",border:" 2px solid black",
    alignContent:"left",
    paddingTop:"10px",
    borderRadius:"20px",
    color:"black"
     }}>know more</Button>
          </div>
            </div>
         <Formcd/>
         </div>
         <div style={{height:"10vh"}}>
         <hr style={{display:"flex",justifyContent:"center",width:"90vw"}}/>

         <Footer/>
         </div>
    </div>
  )
}

export default Contact