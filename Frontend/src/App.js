import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/Produkter/ProductList";
import AddProduct from "./Dashboard/AdminProduct/AddProduct";
import EditProduct from "./Dashboard/AdminProduct/EditProduct";
import SingelProduct from "./components/Produkter/SingelProduct ";
import Home from "./components/Home/Home";
import Navbar  from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Atelje from "./components/Attelje/Atelje";
import Om from "./components/Om/Om";
import Aterforsaljare from "./components/Aterforsaljare/Aterforsaljare";
import AdminProduct from "./Dashboard/AdminProduct/AdminProduct";
import Dashboard from "./Dashboard/Index"
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
        <Route path="/adminproduct" element={<AdminProduct/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer />   
      </BrowserRouter>
  );
}

export default App;
