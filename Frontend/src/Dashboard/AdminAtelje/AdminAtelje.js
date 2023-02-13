
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./indexNews.css";
import { MdDelete} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
const AdminAtelje = () => {
  const [getAtelje, setGetAtelje] = useState([]);

  useEffect(() => {
    getAteljeForList();
  }, []);

  const getAteljeForList = async () => {
    const response = await axios.get("http://localhost:5000/atelje");
    setGetAtelje(response.data);
    console.log(response.data)
  };

  const deleteAtelje = async (ateljeId) => {
    try {
      await axios.delete(`http://localhost:5000/atelje/${ateljeId}`);
      getAteljeForList();
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
              <Link to="/addAtelje"> Lägg till</Link>
            </div>
          </div>
          <table>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Rubrik</strong> </td>
              
              <td>  </td>
              <td> </td>
            </tr>
            {getAtelje.map((atelje) => (
              <tr key={atelje.id}>
                <td>{atelje.id}</td>
                <td>{atelje.atelje} </td>
                <td> <MdDelete className="deletea" onClick={() => deleteAtelje(atelje.id)} /> </td>
                <td> <Link to={`/editAtelje/${atelje.id}`} ><RxUpdate className="update" /> </Link>  </td>

              </tr>

            ))}

          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAtelje;
