import React from 'react'
import logo from "../../img/bondeform.png";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {

    const [isActive, setisActive] = React.useState(false);
  
    const history = useNavigate();
  
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history("/");
        } catch (error) {
            console.log(error);
        }
    }
  
    return (

      
    <section className = "section">
    <div className ="container">
      <div className="center">
       <img alt="logo"src={logo} width="400px"></img>
      
      </div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
 
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

  
    <div id="navbarBasicExample" class="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
      <div class="navbar-start">

        <a href="/" class="navbar-item">
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
            <Link to="/login">Logga in
                </Link>
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