import React from 'react'
import "./footer.css";
import logo from "../../img/logo-1.png";

import {FiInstagram} from "react-icons/fi";
const Footer = () => {
 
  return (

<div className ="container mt-1">
<div className='bottom'>
<div className="navbar-start">
<div className="columns is-full">
<div className='column'>
<br/>
          <img alt="logo"src={logo} />
            </div>  
            </div>
<div className="column">
  <div className='bottom'>
    <br/  >
® Bondeform- mellan hand och hjärta byggs unika former i lera är ett skyddat varumärke!
 <br/>
  Bondeform © 2023. Alla rättigheter förbehållna.<br/>
  <a href="https://www.instagram.com/bondeform_/"><FiInstagram size={32}/></a>
  
  </div>
 
  </div>

  </div>
  </div>
</div>
  
 
  



  )
}
export default Footer;
