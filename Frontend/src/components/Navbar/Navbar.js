import React from 'react'
import logo from "../../img/bondeformlogo.png";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {

    const [isActive, setisActive] = React.useState(false);
  
    return (


    <section className = "section">
    <div className ="container">
       <span className = "title">
      <img alt="logo"src={logo} width="20%"></img>
       </span>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    
        
  
      <a 
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
      <div class="navbar-start">
        <a href="/" class="mynavbartext">
          Start 
        </a>
  
        <a href="/products" class="navbar-item">
          Produkter 
        </a>
        <a href="/atelje" class="navbar-item">
        Min Ateljé
        </a>
        <a href ="/ater" class="navbar-item">
          Återförsäljare
        </a>
        <a href="/om" class="navbar-item">
          Om mig
        </a>
      </div>
    
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            
            <a class="button is-light">
              Logga in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </div>
      </section>
         
  )
}
export default Navbar;