import React from 'react';
import {useCartContext } from "../../Context/CartContext"
import './ItemCart.css'


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img className='itemCart-img' src={product.img} alt={product.title} />
            <div className='card-compra'>
                <p className='card-titulo'>{product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unitario: $ {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className='boton-eliminarProducto' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart