import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./indexDashboard.css";

const Index = () => {


    return (
        <div className="container mt-1">

            <div className="columns">

                <div className="column is-full">
      <Link to="/adminproduct">Produkter</Link>
         
                    </div>
                </div>
            </div>

        
 
  );
};

export default Index;