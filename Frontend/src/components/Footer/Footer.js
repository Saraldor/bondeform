import React from 'react'
import "./footer.css";
import logo from "../../img/logo-1.png";
import holmdeveloper  from "../../img/icons.png";
import {FiInstagram} from "react-icons/fi";
const Footer = () => {
 
  return (

    <div className="container">
      
      <div className="columns">
        
        <div className='column'>
          <br/>
        
        </div>

        <div className="column">
            <br/>
          <div className='bottom'>
            ® Bondeform- mellan hand och hjärta byggs unika former i lera är ett skyddat varumärke av PRV!
            <br />
            Bondeform © 2023. Alla rättigheter förbehållna.<br />
          </div>
          <div className='bottom'>
            
            <a href="https://www.instagram.com/bondeform_/"><FiInstagram size={32} /></a><br/>
            <a href="https://www.holmdeveloper.se">wwww.holmdeveloper.se</a></div>

      </div>
        <div className="column">

          
        </div>
      </div>
      </div>
    
  
 
  



  )
}
export default Footer;
