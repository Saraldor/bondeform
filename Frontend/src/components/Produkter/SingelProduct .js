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



    <div className="container mt-1">
            <div className="box">
      <div className="columns">
        <div className="column is-half">
         
            <img className="image" src={product.url} alt="Image" />
         
        </div>

        <div class="column">
              <div className="box">
           <div>
                <p className="title is-5">{product.name}</p>
                <div dangerouslySetInnerHTML={{__html:product.info}} />
                <br/>
                <div className="title is-5">Pris: {product.pris} kr</div>
                <div className="space">
               <Link to="/products" className="button is-light">
        Tillbaka
      </Link>
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
