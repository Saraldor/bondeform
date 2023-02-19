
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Produkter/products.css"
const Modal = ({open , onClose}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
      }, []);
    
      const { id } = useParams();
      const getProduct = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProducts(response.data);
      };
    
 
    if(!open) return null
  
    return (
       
        <div onClick={onClose} className='overlay' >
        
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer' k
        >
          <img src={products.url} alt='/' />
          <div className='modalRight'>
            <p className='closeBtn' onClick={onClose}>
              X
            </p>
          </div>
   
        </div>
    
      </div>
   
  )
}

export default Modal
