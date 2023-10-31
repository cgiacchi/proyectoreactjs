import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./Components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./Components/Error404";


function App() {
  return (
    <div >      
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>           
      </BrowserRouter>
    </div>
  );
}

export default App;


