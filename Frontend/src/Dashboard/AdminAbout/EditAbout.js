import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import "./about.css"
const EditAbout = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAboutById();
  }, []);

  const getAboutById = async () => {
    const response = await axios.get(`http://localhost:5000/about/${id}`);
    setTitle(response.data.title);
    setText(response.data.text);

    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateAbout = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("text", text);

    try {
      await axios.patch(`http://localhost:5000/about/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/adminAbout");
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
    <div className="container mt-1">
      <div className="box">
        <div className="columns">
<div className="box">
          <div className="column is-full">

            <form onSubmit={updateAbout}>
              <div className="field">
                <label className="label">Titel</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titel"
                  />
                </div>
              </div>

              <label className="label">Uppdater din text</label>
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
                              <FaUpload />
                            </span>Välj en ny bild</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {preview ? (
                  <figure>
                    <img className="image" src={preview} alt="Förhansgranska" />
                   <div className="danger-img">
      <button className="button is-danger" onClick={deleteImg}>Ta bort bild</button> 
      </div>  
                  </figure>
                ) : (
                  ""
                )}
             <br/>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Uppdater din nyhet
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

export default EditAbout;
