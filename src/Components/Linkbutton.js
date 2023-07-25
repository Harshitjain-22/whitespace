import React,{useState, useEffect} from 'react'
import { Button, Typography } from '@mui/material'
// import { createContext } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// const color = createContext();

const Linkbutton = (props) => {
  const [select, setSelect] = useState(true);
  const [color , setColor] = useState("white");

  useEffect(()=>{
    document.body.style.backgroundColor = color;
    if(color == "white"){
      props.getData(true);
    }else{
      props.getData(false);
    }
  },[color])
  let data;
  return (
    // <data.Provider value = {color}>
     data = select ?
      (
        <div className='2b' style={{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"-260px",
        width:"90%",
        marginLeft:"90px",
        marginRight:"90px",
        position : "fixed"
        }}>

    <Button href="#text-buttons" style={{textAlign:"right",border:" 3px solid rgb(211,211,211)",
    alignContent:"left",
    paddingTop:"0px",
    paddingBottom:"0px",
    marginLeft:"20px",
    borderRadius:"40px",
    height:"60px",
    color:"black",
    
     }}><Typography fontWeight={"bolder"} fontSize={"1.1rem"}>harshareddy@whitespacearchitects.in<ArrowOutwardIcon fontSize="large" style={{padding:"0 6px"}}/></Typography></Button>
     
    <Button href="#text-buttons" style={{border:" 2px solid black",
    borderRadius:"40px",
    color:"white",
    height:"60px",
    backgroundColor:"black",
     }} onClick={function(){
      setSelect(false);
      setColor("#030303");
     }}
        >Why choose us? <ArrowOutwardIcon fontSize="large" style={{padding:"0 6px"}}/></Button>
    </div>
    ):
    (
      <>
      <div className='2b' style={{
        display:"flex",
        justifyContent:"space-between",
        paddingTop:"58px",
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        }}>

    <Button href="#text-buttons" style={{textAlign:"right",border:" 3px solid rgb(211,211,211)",
    alignContent:"left",
    paddingTop:"0px",
    paddingBottom:"0px",
    marginLeft:"20px",
    borderRadius:"40px",
    height:"60px",
    color:"white",
     }}><Typography fontWeight={"bolder"} fontSize={"1.1rem"}>harshareddy@whitespacearchitects.in<ArrowOutwardIcon fontSize="large" style={{padding:"0 6px"}}/></Typography></Button>
     
    <Button href="#text-buttons" style={{border:" 2px solid white",
    borderRadius:"40px",
    marginRight:"15px",
    color:"white",
    height:"60px",
    backgroundColor:"black",
     }}>Why choose us? <ArrowOutwardIcon fontSize="large" style={{padding:"0 6px"}}/></Button>
    </div>
    </>
    )
  )

}

export default Linkbutton