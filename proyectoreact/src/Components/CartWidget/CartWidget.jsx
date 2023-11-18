import React from 'react';
import './CartWidget.css';
import {TfiShoppingCart} from "react-icons/tfi";
import {CartContext} from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";



const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext);
  return (
      <div className='widgetCarrito'>
        <button className='button-cart'>
          <TfiShoppingCart style ={{color: "brown", fontSize: "1.5em"}} />        
        </button>
          <Link to="/Cart" style={{display: totalQuantity > 0 ? 'block' :'none'}}>
          <span className="material-symbols-outlined">Shopping_cart</span>
          {
              totalQuantity > 0 && <strong className='cantidad'>{ totalQuantity}</strong>
          }
          </Link>
      </div>
  )
}
export default CartWidget
