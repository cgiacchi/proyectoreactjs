import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/Navbar"
import Cart from "./Components/Cart/Cart"
import { CartProvider } from "./Context/CartContext"
import Checkout from "./Components/Checkout/Checkout"

const App = () => {
    return (
    <>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>              
              <Route path='/cart' element={<Cart />} />
              <Route exact path="/" element={<ItemListContainer />}/>
              <Route path="/categoria/:Categoria" element={<ItemListContainer />}/> 
              <Route exact path="/item/:id" element={<ItemDetailContainer/> } />
              <Route path='/checkout' element={<Checkout />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>   
            </CartProvider >
      </BrowserRouter>
          
    </> 
  
  )
}

export default App









// import React from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import NavBar from "./Components/NavBar/Navbar";
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
// import Error404 from "./Components/Error404";


// function App() {
//   return (
//     <div >      
//       <BrowserRouter >
//         <NavBar />
//         <Routes>
//           <Route path={"/"} element={<ItemListContainer/>} />
//           <Route path={"/category/:id"} element={<ItemListContainer />} />
//           <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
//           <Route path={"*"} element={<Error404 />} />
//         </Routes>           
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


