import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Json/Products.json';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve(id ? Products.filter(item=> item.categoria === id) : Products)
                    }, 1000);
                }
            );
        setItem(data);
            }catch(error){
                console.log('Error:', error);
            }
        };
        fetchData();
    },[id]);
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