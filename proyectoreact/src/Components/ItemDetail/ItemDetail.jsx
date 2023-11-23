import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import {useCartContext } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className='row'>
      <div className='col-lg-8'>
        <img src={item.img} className='img-fluid' alt={item.title} />
        </div>
        <div className='col-lg-4 contenedor-detail'>
          <h2 className='card-title'>{item.title}</h2>
          <div className='card-detail'>
          <p className='card-descripcion'>{item.description}</p>
          <p>Cantidad: {item.stock}</p>
          <p className='card-price'>$ {item.price}</p>
          </div>
          <div className='card-reservar'>
              {!goToCart ? (
              <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
            ) : (
              <Link to='/cart' className='terminar-compra'>Terminar compra</Link>
            )}
          </div>
      </div>
    </div>
    );
};

export default ItemDetail;