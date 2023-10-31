import React from 'react'
import {Link} from 'react-router-dom';
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({item}) => {
    return (
<Link to={"/item/" + item.id} className='text-decoration-none'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" img src= {item.imagen} className='card-img' alt={item.nombre}/>
        <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>${item.precio}
        </Card.Text>
        <Button className='details'>Ver más</Button>
        </Card.Body>
    </Card>
</Link>
    )
}

export default Item;
