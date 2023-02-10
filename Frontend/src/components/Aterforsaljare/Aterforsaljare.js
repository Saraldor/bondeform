import React from 'react'
import { FiInstagram } from "react-icons/fi";
import "./aterforsaljare.css";
const Aterforsaljare = () => {


  return (
    <div className="container mt-1">
<div className="box">
      <div className="columns">
      
        <div className="column is-three-quarter">
          <div className='box'>
            <div>
              <strong>  Annas Växthus</strong><p />
              Galleri & Konsthantverk<p />
              <a href="https://www.instagram.com/annasvaxthus/"><FiInstagram size={28} /></a>
            </div>
          </div>
        </div>

        <div className="column">

          <div className='box'>
            <div>
              <strong> Regnkjedjan</strong><p />
              Trädgårds & inredningsdetaljer<p />
              <a href="https://www.instagram.com/butikregnkedjan/"><FiInstagram size={28} /></a>
            </div>
          </div>
        </div>
        <div className="column">

<div className='box'>
  <div>
    <strong> Christers Butik</strong><p />
    Trädgårds & inredningsdetaljer<p />
    <a href="https://www.instagram.com/butikregnkedjan/"><FiInstagram size={28} /></a>
  </div>
</div>
</div>
      </div>

</div>
    </div>


  );
};

export default Aterforsaljare;
