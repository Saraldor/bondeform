
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./indexNews.css";
import { MdDelete} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
const AdminAbout = () => {
  const [getAbout, setGetAbout] = useState([]);

  useEffect(() => {
    getAboutForList();
  }, []);

  const getAboutForList = async () => {
    const response = await axios.get("http://localhost:5000/about");
    setGetAbout(response.data);
    console.log(response.data)
  };

  const deleteAbout = async (aboutId) => {
    try {
      await axios.delete(`http://localhost:5000/news/${aboutId}`);
      getAboutForList();
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
              <Link to="/addAbout"> Lägg till en ny</Link>
            </div>
          </div>
          <table>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Rubrik</strong> </td>
            
              <td>  </td>
              <td> </td>
            </tr>
            {getAbout.map((about) => (
              <tr key={about.id}>
                <td>{about.id}</td>
                <td>{about.title} </td>
                

                <td> <MdDelete className="deletea" onClick={() => deleteAbout(about.id)} /> </td>
                <td> <Link to={`/editAbout/${about.id}`} ><RxUpdate className="update" /> </Link>  </td>

              </tr>

            ))}

          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;
