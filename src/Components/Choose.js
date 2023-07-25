import React from 'react'
import './main.css'
import { Button } from '@mui/material'

const Choose = () => {
  return (
    <div className='choose' style={{paddingBottom:"60px"}}>
          <h1 style={{paddingTop:"90px", marginTop:"0px",display:"flex",justifyContent:"center",fontfamily: "Poppins"}}>Why choose us?</h1>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins",display:"flex",justifyContent:"center"}}>
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            
    
          </div>
          <div style={{ paddingLeft:"70px",fontfamily: "Poppins",display:"flex",justifyContent:"center"}}>
            
            Lorem Ipsum has been the industry's standard dummy
    
          </div>
          <div style={{display:"flex", justifyContent:"space-around",paddingTop:"100px"}}>
          <div>
            <div className='cricle'>
                1
            </div>
            <div style={{paddingTop:"5px" ,marginLeft:"-25px",fontfamily: "Poppins"}}>
            <b>select the service</b>
            </div>
          </div>
          <div>
            <div className='cricle'>
                2
            </div>
            <div style={{paddingTop:"5px" ,marginLeft:"-25px",fontfamily: "Poppins",fontsize: "40px"}}>
            <b>select the Place</b>
            </div>
          </div>
          <div>
            <div className='cricle'>
                3
            </div>
            <div style={{paddingTop:"5px" ,marginLeft:"-40px",fontfamily: "Poppins",fontsize: "40px"}}>
            <b>Number of workers</b>
            </div>
          </div>
          </div>
          <div style={{display:"flex", justifyContent:"space-around",paddingTop:"70px"}}>
          <div>
            <div className='cricle'>
                4
            </div>
            <div style={{paddingTop:"5px" ,marginLeft:"-45px",fontfamily: "Poppins",fontsize: "40px"}}>
            <b>Enter the email & no.</b>
            </div>
          </div>
          <div>
            <div className='cricle'>
                5
            </div>
            <div style={{paddingTop:"5px" ,marginLeft:"-20px",fontfamily: "Poppins",fontsize: "40px"}}>
            <b>Get the result</b>
            </div>
          </div>
          </div>
          <div style={{borderRadius:"30px ",display:"flex",justifyContent:"center",paddingTop:"80px"}}>
          <Button style={{color:"black",border:" 1px solid black",borderRadius:"30px ",display:"flex",justifyContent:"center" }} >
          Know the difference
          </Button>
          </div>
    </div>
  )
}

export default Choose