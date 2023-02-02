
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./indexPrroducts.css";
import {MdDelete, MdAddCircle} from "react-icons/md";
import {RxUpdate} from "react-icons/rx";
const AdminProduct = () => {
    const [getProducts, setGetProducts] = useState([]);

    useEffect(() => {
      getProductsForList();
    }, []);
  
    const getProductsForList = async () => {
      const response = await axios.get("http://localhost:5000/products");
      setGetProducts(response.data);
      console.log(response.data)
    };
   
    const deleteProduct = async (productId) => {
      try {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProductsForList();
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="container mt-1">

            <div className="columns">

                <div className="column is-full">
                <div className="navbar-end">
                          <div className="button">
           <Link to="/add"> Lägg till en ny produkt</Link>
           </div>
           </div>
                        <table>
      
               <tr>
               <td><strong>ID</strong>  <hr/></td>
               <td><strong>Namn</strong>  <hr/></td>
               
               <td><strong>Pris</strong>  <hr/></td>
               <td>  </td>
               <td> </td>
              
               </tr>
               
              
               
                        {getProducts.map((product) => (
          <tr key={product.id}>
        
              
             
        <td>{product.id}</td>
                    <td>{product.name}   <hr/></td>
                    <td> {product.pris} kr  <hr/></td>
                    <td> <MdDelete className="deletea" onClick={()=>deleteProduct(product.id)} />  <hr/></td>
                    <td> <Link to={`/edit/${product.id}`} ><RxUpdate className="update" /> </Link>  <hr/></td>
                   
              

            
            </tr>
             
            ))}
             
             </table>
         
                    </div>
                </div>
            </div>

        
 
  );
};

export default AdminProduct;
