import React, { useState, useEffect } from "react";
import axios from "axios";

const AboutList = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    const response = await axios.get("http://localhost:5000/about/");
    setAbout(response.data);
  };

  return (

    <div className="container mt-1">
    <div className="box">


      {about.map((about) => (
        <div key={about.id}>
          <div className="columns">

            <div class="column is-half">
              <div className="box">
                <img className="image" src={about.url} alt="Image" />
              </div>
            </div>
            <div class="column">
              <div className="box">
                <p className="title is-5">{about.title}</p>
                <div dangerouslySetInnerHTML={{__html:about.text}} />

              </div>

            </div>
          </div>
        </div>
      ))}

    </div>
</div>

  );
};

export default AboutList;
