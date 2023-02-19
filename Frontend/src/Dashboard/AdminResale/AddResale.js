import React, { useState } from "react";
import axios from "axios";
import {FaUpload} from "react-icons/fa";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';      
import { useNavigate } from "react-router-dom";
import "./Resale.css"
const AddResale = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [hompage, setHompage] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveResale = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("text", text);
    formData.append("instagram", instagram);
    formData.append("facebook", facebook);
    formData.append("hompage", hompage);
    
   
    try {
      await axios.post("http://localhost:5000/resale", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteImg =(e) => {
    const image = e.target.files;
    setPreview(image);
      setFile(URL.revokeObjectURL(image));
  } 

  return (
    <div className="container">
    <div className="box">
    <div className="columns">
      <div className="column is-full">
        <div className="box">
        <form onSubmit={saveResale}>
          <div className="field"> * Obligatoriska
            <label className="label">Företagets namn *</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Namn på företaget"
              />
            </div>
            <label className="label">Instagram</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="http://"
              />
            </div>
            <label className="label">Facebook</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="http://"
              />
            </div>
            <label className="label">Hemsida</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hompage}
                onChange={(e) => setHompage(e.target.value)}
                placeholder="http://"
              />
            </div>
            <label className="label">Kort info om företaget *</label>
            <div className="control">
            <CKEditor
                editor= {ClassicEditor}
                 data={text}
                value={text}
                onChange={(e, editor) => {
                  const data = editor.getData()
                  setText(data)}}  
                placeholder=""
                className="editor"
              />
            </div>
            </div>
        

          <div className="field">
            <label className="label">Bild *</label>
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
      </span>Välj en bild </span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure>
              <img src={preview} alt="förhansgranska" />
              <div className="danger-img">
      <button className="button is-danger" onClick={deleteImg}>Ta bort bild</button> 
      </div>  
            </figure>
          ) : (
            ""
          )}
      
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Spara Återförsäljare
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

export default AddResale;
