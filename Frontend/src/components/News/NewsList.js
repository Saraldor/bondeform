import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get("http://localhost:5000/news/");
    setNews(response.data);
  };

  return (


    <div className="box">


      {news.map((news) => (
        <div key={news.id}>
          <div className="columns">

            <div class="column is-half">
              <div className="box">
                <img className="image" src={news.url} alt="Image" />
              </div>
            </div>
            <div class="column">
              <div className="box">
                <p className="title is-5">{news.news}</p>
                <p> {news.text}</p>

              </div>

            </div>
          </div>
        </div>
      ))}

    </div>


  );
};

export default NewsList;
