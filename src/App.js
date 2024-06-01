import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componets/Header/Header";
import Home from "./Componets/Home/Home";
import Cart from "./Componets/Cart/Cart";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
