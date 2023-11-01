import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    return (
    <div className='row card__detail'>
        <div className='col-md-4 img-detail'>
            <img src={item.imagen} className='img-fluid' variable='left' alt={item.nombre}/>
        </div>
        <div className='col-md-4 offset-md-2 card__detail'>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p className='price'> $ {item.precio}</p>
            <p> Cantidad: {item.stock}</p>
        </div>
    <div>
        <ItemCount className="itemcount" stockItems={10}/>
    </div>
    </div>
    )
}

export default ItemDetail