import React, { useState } from "react";
import axios from "axios";
import {FaUpload} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./products.css"
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [pris,setPris] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("info", info);
    formData.append("pris", pris);
    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
    
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <div className="box">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="title is-4">Titel</label>
            <div className="control">
              <input
                type="text"
                className="input is-medium"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Namn på produkten"
              />
            </div>
            <label className="title is-4">Information</label>
            <div>
              <textarea
                rows="10"
                type="text"
                cols="115"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                placeholder=""
                className="textarea is-info"
              />
            </div>
          </div>
          <label className="title is-4">Pris</label>
            <div className="control">
              <input
                type="text"
                className="input is-medium"
                value={pris}
                onChange={(e) => setPris(e.target.value)}
                placeholder="Pris utan kr "
               
              />
            </div>
        

          <div className="field">
            <label className="title is-4">Bild</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">
                    <span class="file-icon">
         <FaUpload/>
      </span>Välj en bild</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure>
              <img src={preview} alt="förhansgranska" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Spara
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AddProduct;
