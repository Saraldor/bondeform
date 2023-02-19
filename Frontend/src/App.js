import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';
import ProductList from "./components/Produkter/ProductList";
import AddProduct from "./Dashboard/AdminProduct/AddProduct";
import AddNews from "./Dashboard/AdminNews/AddNews";
import EditProduct from "./Dashboard/AdminProduct/EditProduct";
import SingelProduct from "./components/Produkter/SingelProduct ";
import Home from "./components/Home/Home";
import News from "./components/News/NewsList";
import Navbar  from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Atelje from "./components/Attelje/Atelje";
import AboutList from "./components/Om/AboutList";
import ResaleList from "./components/Aterforsaljare/ResaleList";
import AdminProduct from "./Dashboard/AdminProduct/AdminProduct";
import AdminNews from "./Dashboard/AdminNews/AdminNews";
import Register from "./Dashboard/Auth/Register";
import Login from "./Dashboard/Auth/Login";
import EditNews from "./Dashboard/AdminNews/EditNews";
import AddAtelje from "./Dashboard/AdminAtelje/AddAtelje";
import AddResale from "./Dashboard/AdminResale/AddResale";
import EditResale from "./Dashboard/AdminResale/EditResale";
import EditAtelje from "./Dashboard/AdminAtelje/EditAtelje";
import AdminAtelje from "./Dashboard/AdminAtelje/AdminAtelje";
import AdminResale from "./Dashboard/AdminResale/AdminResale";
import AddAbout from "./Dashboard/AdminAbout/AddAbout";
import EditAbout from "./Dashboard/AdminAbout/EditAbout";
import AdminAbout from "./Dashboard/AdminAbout/AdminAbout";
import Dashboard from "./Dashboard/Index"



function App() {
  
  return (
   
 <BrowserRouter>
      <Navbar />
   
      
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="singel/:id" element={<SingelProduct />} />
          <Route path="/atelje" element={<Atelje />} />
          <Route path="/about" element={<AboutList />} />
          <Route path="/resale" element={<ResaleList />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
         
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="/adminproduct" element={<AdminProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addNews" element={<AddNews />} />
          <Route path="/addAtelje" element={<AddAtelje />} />
          <Route path="/addResale" element={<AddResale />} />
          <Route path="/adminNews" element={<AdminNews />} />
          <Route path="/adminAtelje" element={<AdminAtelje />} />
          <Route path="/adminResale" element={<AdminResale />} />
          <Route path="/editNews/:id" element={<EditNews />} />
          <Route path="/editAtelje/:id" element={<EditAtelje />} />
          <Route path="/editResale/:id" element={<EditResale />} />
          <Route path="/addAbout" element={<AddAbout />} />
          <Route path="/editAbout/:id" element={<EditAbout />} />
         
          <Route path="/adminAbout" element={<AdminAbout />} />
        
    </Routes>
   
    <Footer />  
      </BrowserRouter>
    
  );
}

export default App;
