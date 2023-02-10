import React, { useState } from "react";
import axios from "axios";
import {FaUpload} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import "./News.css"
const AddNews = () => {
  const [news, setNews] = useState("");
  const [text, setText] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveNews = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("news", news);
    formData.append("text", text);
   
    try {
      await axios.post("http://localhost:5000/news", formData, {
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
        <form onSubmit={saveNews}>
          <div className="field">
            <label className="label">Nyhet</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={news}
                onChange={(e) => setNews(e.target.value)}
                placeholder="Rubrik på nyheten"
              />
            </div>
            <label className="label">Nyheten</label>
            <div>
           
              <textarea
                rows="10"
                type="text"
                cols="115"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder=""
                className="textarea is-info"
              />
            </div>
          </div>
        

          <div className="field">
            <label className="label">Bild till nyheten</label>
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
                Spara nyhet
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

export default AddNews;
