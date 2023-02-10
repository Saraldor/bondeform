import React from 'react'
import ReactPlayer from 'react-player'
import "./atelje.css";
const Home = () => {


  return (
    <div className="container mt-1">
   <div className="box">
      <div className="columns">
        
          <div className="column is-half">
          
          <div className="box"> 
          <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://vimeo.com/736113805'
          width='100%'
          height='100%'
        />
        </div>
    </div>
             </div>
             
             <div className="column">
              
              <div className='box'>
              <p/> I min ateljé sker allt skapande, det är här som leran tar form och blir till de fina skapelse som ni sen kan köpa av mig. Om ni klickar på videon så får ni följa med in till min ateljé. <br/><br/>Mina former byggs med inspiration från stunder och händelser i livet, flera av dem ha en egen dikt.
              <br/><br/>Hållbarhet för mig är att göra inköp med hjärtat. Att omge sig med ting som betyder något speciellt och på så vis vill man inte byta ut dem.
              </div>
              </div>
              <p/></div>
       </div>         
    

</div>
                
    
  );
};

export default Home;
