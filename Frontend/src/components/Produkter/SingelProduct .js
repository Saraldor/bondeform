import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from"../Modal/index"
import "./products.css"

import { Link } from "react-router-dom";
const SingelProduct = () => {
  const [product, setProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const { id } = useParams();
  const getProduct = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(response.data);
  };

  return (



    <div className="container mt-1">
            <div className="box">
      <div className="columns">
      <Link to="/products" className="button is-info">
        Tillbaka
      </Link>
        <div className="column is-half">
        <div className="alignCenter">

        <Modal 
open={openModal} 
onClose={() => setOpenModal(false)} />
            <img onClick={() => setOpenModal(true)} className="imgProduct" src={product.url} alt="Image" />
         
        </div>
</div>
        <div class="column">
              <div className="box">
           <div>
                <p className="title is-5">{product.name}</p>
                <div dangerouslySetInnerHTML={{__html:product.info}} />
                <br/>
                <div className="title is-5">Pris: {product.pris} kr</div>
                <div className="space">
              
      </div>
      </div>
          </div>

        </div>
      </div>
    </div>
</div>

  );
};

export default SingelProduct;
