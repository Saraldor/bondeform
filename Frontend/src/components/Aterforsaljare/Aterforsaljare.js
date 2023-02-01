import React from 'react'
import { FiInstagram } from "react-icons/fi";
import "./aterforsaljare.css";
const Aterforsaljare = () => {


  return (
    <div className="container mt-1">

      <div className="columns">
      
        <div className="column is-half">
          <div className='box'>
            <div className="ater-text">
              <strong>  Annas Växthus</strong><p />
              Galleri & Konsthantverk<p />
              <a href="https://www.instagram.com/annasvaxthus/"><FiInstagram size={32} /></a>
            </div>
          </div>
        </div>

        <div className="column is-half">

          <div className='box'>
            <div className="ater-text">
              <strong> Regnkjedjan</strong><p />
              Trädgårds & inredningsdetaljer<p />
              <a href="https://www.instagram.com/butikregnkedjan/"><FiInstagram size={32} /></a>
            </div>
          </div>
        </div>
      </div>


    </div>


  );
};

export default Aterforsaljare;
