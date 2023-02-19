import React, { useState } from "react";
import axios from "axios";
import {FaUpload} from "react-icons/fa";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from "react-router-dom";
import "./about.css"
const AddAbout = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveAbout = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("text", text);
   
    try {
      await axios.post("http://localhost:5000/about", formData, {
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
        <form onSubmit={saveAbout}>
          <div className="field">
            <label className="label">Titel</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Rubrik på nyheten"
              />
            </div>
            <label className="label">Om dig</label>
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
            <label className="label">Bild på dig</label>
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

export default AddAbout;
