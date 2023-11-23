import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
// import './CartItem.css'


const CartItem = ({ Titulo, id, Cantidad, Precio }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="contenedorCarrito">
      <h4 className="titulo">{Titulo}</h4>
      <p>Cantidad: {Cantidad}</p>
      <p>Precio: ${Precio}</p>
      <button className="btn" onClick={() => removeItem(id)}> Eliminar </button>
    </div>
  );
};
export default CartItem



//         <Image className="cardImagen" boxSize='200px'
//           objectFit='cover'
//           w={'100px'}
//           src={Imagen}
//         />