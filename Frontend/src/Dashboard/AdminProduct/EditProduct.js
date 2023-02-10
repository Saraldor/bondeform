import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {FaUpload} from "react-icons/fa";
import "./products.css"
const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [pris, setPris] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.name);
    setInfo(response.data.info);
    setPris(response.data.pris);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("info", info);
    formData.append("pris", pris);
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, formData, {
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
    <div className="box">
    <div className="columns">
      <div className="column is-full">
        <div className="box">
        <form onSubmit={updateProduct}>
          <div className="field">
            <label className="label">Produkt namn</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Produkt namn"
              />
            </div>
          </div>
         
            <label className="label">Information</label>
            <div className="control">
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
            <label className="label">Pris</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pris}
                onChange={(e) => setPris(e.target.value)}
                placeholder="Pris utan kr"
              />
            </div>

          <div className="field">
            <label className="label">Bild</label>
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
      </span>Välj en ny bild</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure>
              <img className="image is-128x128"src={preview} alt="Förhansgranska" />
            </figure>
          ) : (
            ""
          )}
<br/>
          <div className="field">
            <div className="control">
             
              <button type="submit" className="button is-success">
                Uppdater produkt
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EditProduct;
