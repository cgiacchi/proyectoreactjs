import React from 'react'
import './CardItem.css';


const CardItem = ({imagen,nombre,edificio,description}) => {
    return (
    <div className="card text-bg-dark">
      <img src={imagen} className="card-img" alt="..."/>
      <div className="card-body -overlay">
        <h3 className="card-title">{nombre}</h3>
        <h5 className="card-subtitle">{edificio}</h5>
        <p className="card-text">{description}</p>
        <button className='details'>Ver más!</button>
    </div>
  </div>
  )
}

export default CardItem