import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (!cart || cart.length === 0){
    return (
      <>
        <h3 className='carrito-vacio'>No hay departamentos o servicios seleccionados.</h3>
        <button className='boton-carrito'>
        <Link to="/" className='link-carrito'>Hacer reserva</Link>
        </button>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (<ItemCart key={item.id} product={item} />))}
      <div className="container-carrito">
        {/* <h5 className="total">Total: ${totalPrice}</h5>   */}
              <button onClick={() => clearCart() } className='boton-limpiarCarrito' > Limpiar Carrito </button>
              <Link to='/' className="boton-home">Volver a reservas</Link>
              <Link to='/Checkout' className="boton-reservar">Finalizar reserva</Link>
          </div>
    </>
  );
};

export default Cart;