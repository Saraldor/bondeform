
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./indexNews.css";
import { MdDelete} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
const AdminAtelje = () => {
  const [getResale, setGetResale] = useState([]);

  useEffect(() => {
    getResaleForList();
  }, []);

  const getResaleForList = async () => {
    const response = await axios.get("http://localhost:5000/resale");
    setGetResale(response.data);
    console.log(response.data)
  };

  const deleteResale = async (resaleId) => {
    try {
      await axios.delete(`http://localhost:5000/resale/${resaleId}`);
      getResaleForList();
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
              <Link to="/addResale"> Lägg till</Link>
            </div>
          </div>
          <table>
            <tr>
              <td><strong>ID</strong></td>
              <td><strong>Företag</strong> </td>
              
              <td>  </td>
              <td> </td>
            </tr>
            {getResale.map((resale) => (
              <tr key={resale.id}>
                <td>{resale.id}</td>
                <td>{resale.name} </td>
                <td> <MdDelete className="deletea" onClick={() => deleteResale(resale.id)} /> </td>
                <td> <Link to={`/editResale/${resale.id}`} ><RxUpdate className="update" /> </Link>  </td>

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
