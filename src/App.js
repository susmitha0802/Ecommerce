import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/home/Home";
import { Products } from "./components/product/Product";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/products/:id" element={ <Products/> }/>
      </Routes>
    </>
  );
}

export default App;
