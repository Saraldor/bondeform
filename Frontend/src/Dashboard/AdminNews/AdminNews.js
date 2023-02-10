
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./indexNews.css";
import { MdDelete} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
const AdminNews = () => {
  const [getNews, setGetNews] = useState([]);

  useEffect(() => {
    getNewsForList();
  }, []);

  const getNewsForList = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setGetNews(response.data);
    console.log(response.data)
  };

  const deleteNews = async (newsId) => {
    try {
      await axios.delete(`http://localhost:5000/news/${newsId}`);
      getNewsForList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-1">
      <div className="box">
      <div className="columns">
        <div className="column is-full">
        <div className="navbar-start">
            <div className="button">
              <Link to="/dashboard"> Tillbaka</Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="button">
              <Link to="/addNews"> Lägg till en ny nyhet</Link>
            </div>
          </div>
          <table>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Rubrik</strong> </td>
              
              <td>  </td>
              <td> </td>
            </tr>
            {getNews.map((news) => (
              <tr key={news.id}>
                <td>{news.id}</td>
                <td>{news.news} </td>
                <td> <MdDelete className="deletea" onClick={() => deleteNews(news.id)} /> </td>
                <td> <Link to={`/editNews/${news.id}`} ><RxUpdate className="update" /> </Link>  </td>

              </tr>

            ))}

          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
