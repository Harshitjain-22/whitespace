import React from 'react'
import Contentservice from './Contentservice'
import Arroz from'./Arroz'
import { Button } from '@mui/material'
import'./main.css'
const Services = () => {
  return (
    <div className='service' id='Service' style={{display:"flex",justifyContent:"space-between",paddingBottom:"60px"}}>
      <div>
      <h1 style={{padding: "0",
    margin:"0",
    paddingTop:"50px",
    marginLeft:"60px",
    display: "flex",
    justifycontent: "left"}}>Services</h1>
    <div style={{paddingTop:"50px" ,paddingLeft:"30px"}}>
      <Contentservice/>
      <div style={{color: "#FFF",
    fontfamily: "Poppins",
    fontstyle: "normal",
    fontweight: "600",
    // lineheight: "72px", /* 109.091% */
    texttransform:"lowercase",
    display:"flex",
    alignContent:"left",
    marginLeft:"80px",
    paddingTop:"0px",
    paddingBottom:"20px"
    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
      Lorem Ipsum has been the industry's standard dummy</div>
      <Button href="#text-buttons" style={{textAlign:"right",border:" 1px solid white",
    alignContent:"left",
    paddingTop:"10px",
    marginLeft:"80px" ,
    borderRadius:"20px",
    color:"white"
     }}>know more</Button>
     <h2 style={{color: "#FFF",
    fontfamily: "Poppins",
    fontstyle: "normal",
    fontweight: "600",
    // lineheight: "72px", /* 109.091% */
    texttransform:"lowercase",
    display:"flex",
    alignContent:"left",
    marginLeft:"80px",
    paddingTop:"0px",
    paddingBottom:"0"}} >900K+</h2>
     <h5 style={{color: "#FFF",
    fontfamily: "Poppins",
    fontstyle: "normal",
    fontweight: "600",
    // lineheight: "72px", /* 109.091% */
    texttransform:"lowercase",
    display:"flex",
    alignContent:"left",
    marginTop:"0",
    marginLeft:"80px",
    paddingTop:"0px",
    paddingBottom:"0"}} >900K+</h5>
    </div>
    </div>
    <div style={{paddingTop:"170px" ,paddingRight:"40px"}}>
    <Arroz/>
    </div>
    </div>
    
  )
}

export default Services