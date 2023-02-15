import React, { useState, useEffect } from "react";
import axios from "axios";
import "./aterforsaljare.css";
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const ResaleList = () => {

  const [resale, setResale] = useState([]);

  useEffect(() => {
    getResale();
  }, []);

  const getResale = async () => {
    const response = await axios.get("http://localhost:5000/resale/");
    setResale(response.data);
  };

  return (

 <div className="container mt-1">
      <div className="box">
        <div className="columns is-multiline mt-1">
          {resale.map((resale) => (
            <div className="column is-three-quarter" key={resale.id}>
              <div className="card">
                <div className="card-image">
                  <div className="resale-center">
                  
                  <figure className="image is-128x128">
                 <img className="card" src={resale.url} alt="Image" />
                  </figure>
                 
                  </div>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                    <p className="ater-head">{resale.name}</p>
                      <p className="ater-text-2">
                        <div dangerouslySetInnerHTML={{__html:resale.text}} /></p>
                     <div className="social">
                     {resale.instagram && <a href={resale.instagram}><FaInstagramSquare size={28}/></a>}
                      {resale.facebook && <a href={resale.facebook}><FaFacebookSquare size={28}/></a>}
                      </div>
                      {resale.hompage &&<div className="ater-text"><a href={resale.hompage}>Hemsida</a></div>}
                      
                    </div>

                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default ResaleList;
