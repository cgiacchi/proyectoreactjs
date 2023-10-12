import React from 'react';
import './CartWidget.css';
import {TfiShoppingCart} from "react-icons/tfi";

const CartWidget = () => {
  return (
    <>
        <div className='div-cart'>
        <button className='button-cart'>
          <TfiShoppingCart style ={{color: "white", fontSize: "1.5em"}} />        
        </button>
        </div>
    </>
  )
}

export default CartWidget