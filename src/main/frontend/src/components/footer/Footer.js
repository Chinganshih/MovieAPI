import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footer'> 
        <h3>thriftstore.tw@gmail.com | Toronto, Canada</h3>
        <div className="social-container">  
            <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook}/> </a>
            <a href="https://instagram.com/2clothes_an?igshid=ZGUzMzM3NWJiOQ=="> <FontAwesomeIcon icon={faInstagram}/> </a>
            <a href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitter}/> </a>
        </div>
        
        
        <p className='text-center p-3'>copyright @2023</p>

    </div>
  )
}

export default Footer