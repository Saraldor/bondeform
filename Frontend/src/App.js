import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/Produkter/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import SingelProduct from "./components/Produkter/SingelProduct ";
import Home from "./components/Home/Home";
import Navbar  from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Atelje from "./components/Attelje/Atelje";
import Om from "./components/Om/Om";
import Aterforsaljare from "./components/Aterforsaljare/Aterforsaljare";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
        <Route path="singel/:id" element={<SingelProduct/>}/>
        <Route path="/atelje" element={<Atelje/>}/>
        <Route path="/om" element={<Om/>}/>
        <Route path="/ater" element={<Aterforsaljare/>}/>
      </Routes>
      <Footer />   
      </BrowserRouter>
  );
}

export default App;
