import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import "./home.css";
const Home = () => {


  return (
    <div className="container mt-1">
   
      <div className="columns">
        
          <div className="column is-half">
          <div className="start">Välkommen till Bondeform</div>
        <div className="frame">
          <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://vimeo.com/794137554'
          width='100%'
          height='100%'
        />
        
        </div>
        </div>
             </div>
             
             <div className="column is-half"><div className="home">
              <div className="box">
              Bondeform är ett litet nystartat företag som drivs av mig Therése Bondesson. 
          Jag har min gårdsateljé i Ronneby som ligger mitt i Blekinge. Där andas jag, lever och bygger. 
          Jag strävar alltid efter att vara i nuet med varje lerklump och älskar att följa processen, 
          därför blir alla mina produkter sin egen och alla är olika, precis som vi människor.<br/><br/>
          Bondeform föddes mitt i den tuffa pandemitiden. Då fick jag andrum och sakteliga kom kreativiteten och lusten tillbaka. En svår tid på många sätt men för mig blev det pånyttfödelse. Mina former byggs med inspiration från stunder och händelser i livet, flera av dem ha en egen dikt.
          </div>
          </div>
          <p/></div>
       </div>         
    

</div>
                
    
  );
};

export default Home;
