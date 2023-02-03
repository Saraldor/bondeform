import React  from "react";

import { Link } from "react-router-dom";
import "./indexDashboard.css";

const Navbar = () => {


    return (
        <div className="container mt-1">

            <div className="columns">

                <div className="column is-full">
                <div className="navbar-start">
                          <div className="button">
           <Link to="/adminproduct">Produkter</Link>
           </div>
           <div className="button">
           <Link to="/admiNews">Nyheter</Link>
           </div>
     
         
                    </div>
                </div>
           </div>
           </div>

        
 
  );
};

export default Navbar;