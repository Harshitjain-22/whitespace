import React from 'react'
import './main.css'
import { Button } from '@mui/material'
let photo=require('./Rectangle 15.png')

const About = () => {
  return (
    <div className='About'id='Client' style={{display:"flex",justifyContent:"space-around",paddingBottom:"60px"}}>
      <div style={{paddingRight:"60px",paddingLeft:"100px"}} >
          <h1 style={{paddingTop:"80px",marginTop:"0",fontfamily: "Poppins" ,paddingLeft:"70px"}}>Client Proposals in Minutes(saas)</h1>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins"}}>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
            </p>
          </div>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins" ,paddingTop:"10px"}}>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  
            </p>
          </div>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins",paddingTop:"10px"}}>
            <p>
            By the way: If you would like to talk to us in Hindi, that's fine. We do speak Hindi too. 
            </p>
          </div>
          <div>
            <Button href="#text-buttons"
             style={{textAlign:"right",
             border:" 1px solid black",
             borderradius: "20px",
             color:"white",
             paddingLeft:"70px",
             paddingTop:"20px",
             }}>
            harshareddy@whitespacearchitects.in
            </Button>
          </div>
          </div>

    </div>
  )
}

export default About