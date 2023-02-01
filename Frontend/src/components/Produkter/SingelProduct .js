import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./products.css"
import { Link } from "react-router-dom";
const SingelProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const { id } = useParams();
  const getProduct = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setProduct(response.data);
  };

  return (



    <div className="container">
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <figure className="image is-2by">
            <img className="singel" src={product.url} alt="Image" />
          </figure>
        </div>

        <div className="columm is-half">
          <div className="box">
            <article class="media">
              <div className="media-content">
                <div className="title is-4">{product.name}</div>
                <div className="content">{product.info}</div>
               
                <div className="title is-5">Pris: {product.pris} kr</div>
                <button class="button is-light"> Lägg i varukorgen</button><Link to="/products" className="button is-light">
        Tillbaka
      </Link>
              </div>
            </article>
          </div>

        </div>
      </div>
    </div>


  );
};

export default SingelProduct;
