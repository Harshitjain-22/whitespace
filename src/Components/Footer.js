import { Padding, PaddingRounded } from '@mui/icons-material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './main.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{display:"flex",justifyContent:"space-between",paddingTop:"30px"}}>
      <div>
      <a href=""  style={{paddingLeft:"70px"}}>
      Made with 🖤 @webdbyutkarsh
  </a>
  </div>
  <div style={{paddingRight:"60px"}}>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social" style={{paddingLeft:"10px"}}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social" style={{paddingLeft:"10px"}}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
        
      </div>
  )
}

export default Footer