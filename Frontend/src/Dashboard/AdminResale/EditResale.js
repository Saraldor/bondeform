import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";


import "./Atelje.css"
const EditResale = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [instagram,setInstagram] = useState("");
  const [facebook,setFacebook] = useState("");
  const [hompage,setHompage] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getResaleById();
  }, []);

  const getResaleById = async () => {
    const response = await axios.get(`http://localhost:5000/resale/${id}`);
    setName(response.data.name);
    setText(response.data.text);
    setInstagram(response.data.instagram);
    setFacebook(response.data.facebook);
    setHompage(response.data.hompage);
   
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
     
  

const updateResale = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("text", text);
    formData.append("instagram", instagram);
    formData.append("facebook", facebook);
    formData.append("hompage", hompage);
    
    

    try {
      await axios.patch(`http://localhost:5000/resale/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/adminResale");
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

            <form onSubmit={updateResale}>
              <div className="field">
                * Obligatoriska
                <label className="label">Förtegas namn *</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Företags namn"
                  />
                </div>
              </div>
              <label className="label">Instgram</label>
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
                              <FaUpload />
                            </span>Välj en ny bild</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              
                {preview ? (
                  <figure>
                    <img className="image" src={preview} alt="Förhansgranska"/>
                    <div className="danger-img">
      <button className="button is-danger" onClick={deleteImg}>Ta bort bild</button> 
      </div>  
                  </figure>
                ) : (
                  ""
                )}
              
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success" >
                    Uppdatera
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

export default EditResale;
