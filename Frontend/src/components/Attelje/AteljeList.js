import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'
import "./atelje.css";
const AteljeList = () => {

  const [atelje, setAtelje] = useState([]);

  useEffect(() => {
    getAtelje();
  }, []);

  const getAtelje = async () => {
    const response = await axios.get("http://localhost:5000/atelje/");
    setAtelje(response.data);
  };

  return (


    <div className="box">


      {atelje.map((atelje) => (
        <div key={atelje.id}>
          <div className="columns">

            <div class="column is-half">
              <div className="box">
                <img className="image" src={atelje.url} alt="Image" />
              </div>
              <div className="box">
              <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={atelje.videoUrl}
          width='100%'  
          height='100%'
        />
        </div>
            </div>
            </div>
            <div class="column">
              <div className="box">
                <p className="title is-5">{atelje.atelje}</p>
                <div dangerouslySetInnerHTML={{__html:atelje.text}} />

              </div>

            </div>
          </div>
        </div>
      ))}

    </div>


  );
};

export default AteljeList;
