import React, { useState } from "react";
import axios from "axios";
import {FaUpload} from "react-icons/fa";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';      
import { useNavigate } from "react-router-dom";
import "./Atelje.css"
const AddAtelje = () => {
  const [atelje, setAtelje] = useState("");
  const [text, setText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveAtelje = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("atelje", atelje);
    formData.append("videoUrl", videoUrl);
    formData.append("text", text);
   
    try {
      await axios.post("http://localhost:5000/atelje", formData, {
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
        <form onSubmit={saveAtelje}>
          <div className="field">
            <label className="label">Rubrik</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={atelje}
                onChange={(e) => setAtelje(e.target.value)}
                placeholder="Rubrik"
              />
            </div>
            <label className="label">Länk till Video</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Rubrik"
              />
            </div>
            <label className="label">Atelje text</label>
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
            <label className="label">Bild till texten</label>
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
                Spara Atelje text
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

export default AddAtelje;
