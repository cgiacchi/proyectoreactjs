import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Products from '../Json/Products.json';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(Products.find(item=> item.id === parseInt(id)))
    }, 1000)
  });
    promesa.then((data)=>{
    setItem(data)
  })
  }, [id])

  return (
    <div className='card__detail'>
      <ItemDetail className='card__detail' item={item}/>
    </div>
  )
}

export default ItemDetailContainer