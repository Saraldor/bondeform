import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };


  return (
    <div className="container mt-1">
      <div className="box">
        <div className="columns is-multiline mt-1">
          {products.map((product) => (
            <div className="column is-one-quarter" key={product.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <img className="card" src={product.url} alt="Image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-5">{product.name}</p>

                      <p className="title is-6"> Pris: {product.pris} kr</p>
                      <div className="card-footer-item">
                        <Link to={`/singel/${product.id}`} className="box">
                          Läs mer
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
