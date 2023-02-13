import React, { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import "./Atelje.css"
const EditAtelje = () => {
  const [atelje, setAtelje] = useState("");
  const [text, setText] = useState("");
  const [videoUrl,setVideoUrl] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAteljeById();
  }, []);

  const getAteljeById = async () => {
    const response = await axios.get(`http://localhost:5000/atelje/${id}`);
    setAtelje(response.data.atelje);
    setText(response.data.text);
    setVideoUrl(response.data.videoUrl)
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };


  const updateAtelje = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("atelje", atelje);
    formData.append("videoUrl", videoUrl);
    formData.append("text", text);

    try {
      await axios.patch(`http://localhost:5000/atelje/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/adminAtelje");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container mt-1">
      <div className="box">
        <div className="columns">
<div className="box">
          <div className="column is-full">

            <form onSubmit={updateAtelje}>
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
              </div>
              <label className="label">Video länk</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="http://"
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
               
                  </figure>
                ) : (
                  ""
                )}
               
             <br/>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
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

export default EditAtelje;
