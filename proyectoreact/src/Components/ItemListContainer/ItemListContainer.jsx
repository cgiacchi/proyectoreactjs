import React from 'react'
import { useState, useEffect } from 'react'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
  const queryDb = getFirestore();
  const queryCollection = collection(queryDb, 'products');
  if(id){
  const queryFilter = query(queryCollection, where('categoryID', '==', id));
  getDocs(queryFilter).then((res) => setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
  );
  }else{
    getDocs(queryCollection).then((res)=> setItem (res.docs.map((p)=>({id: p.id, ...p.data()})))
  );
  }
  }, [id])


  return (
  <div className='container'>
    <div className='row'>
      <div className='main__greeting'>
        <hr  className='hr_greetingCorta' />
        <hr className='hr_greetingLarga'/>
        <h4 className='greeting'>Ubicados en el corazon de Palermo, centro turistico, comercial y cultural del país.</h4>
        <hr className='hr_greetingLarga'/>
        <hr  className='hr_greetingCorta' />
      </div>
      <ItemList item={item}/>
    </div>
  </div>
  )
}


export default ItemListContainer
