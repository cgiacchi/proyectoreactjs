import React, { isValidElement } from "react"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
// import { Flex } from "@chakra-ui/react"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
    
    const [producto, setProductos] = useState({});
    const [loading, setLoading] = useState(false)//modifica
    const {id} = useParams()
    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const oneItem = doc(db, "tiendita", id)
               
        getDoc(oneItem).
            then((snapshot) => {
                if(snapshot.exists()){
                const docs = snapshot.data()
                setProductos({id, ...docs})
            } 
        })
        .catch((error) =>{
            console.log('Error al obtener Productos:', error) 
        })
        .finally(() => setLoading(false))//modifica
    },[id])
        if(loading){
            return(
                <Loading/> 
            )
        }
    return(
        
<div className="estilo">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '16px', 
        }}
      >
        <ItemDetail productos={producto} />
      </div>
    </div>
  );
};
export default ItemDetailContainer












// import React from 'react'
// import { useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom';
// import Products from '../Json/Products.json';
// import ItemDetail from '../ItemDetail/ItemDetail';
// import './ItemDetailContainer.css'


// const ItemDetailContainer = () => {
//   const [item, setItem] = useState([]);
//   const {id} = useParams();

//   useEffect(()=>{
//   const promesa = new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(Products.find(item=> item.id === parseInt(id)))
//     }, 1000)
//   });
//     promesa.then((data)=>{
//     setItem(data)
//   })
//   }, [id])

//   return (
//     <div className='card__detail'>
//       <ItemDetail className='card__detail' item={item}/>
//     </div>
//   )
// }

// export default ItemDetailContainer