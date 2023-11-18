import { useContext } from "react"
// import { Image } from "@chakra-ui/react";
import { CartContext } from "../../Context/CartContext";
// import './CartItem.css'
import Loading from "../Loading/Loading";


const CartItem = ({Titulo, id, quantity, Precio}) => {
    const {removeItem} = useContext(CartContext);
<Loading />
  return (
    <div className="contenedorItem1">
        <h4 className="titulo">{Titulo}</h4>
        <div className="cardImagen" boxSize='200px'
          objectFit='cover'
          w={'100px'}
          // src={Imagen}
        />
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${Precio}</p>
        <button className="btn" onClick={() => removeItem(id)}> Eliminar </button>
        <hr />
    </div>
  )
}
export default CartItem












// import { useContext } from "react"
// import { Image } from "@chakra-ui/react";
// import { CartContext } from "../../context/CartContext";
// import './CartItem.css'
// import Loading from "../Loading/Loading";
// import {TfiShoppingCart} from "react-icons/tfi";


// const CartItem = ({Titulo, Imagen, id, quantity, Precio}) => {
//     const {removeItem} = useContext(CartContext);
// <Loading />
//   return (
//     <div className="contenedorItem1">
//         <h4 className="titulo">{Titulo}</h4>
//         <button className='button-cart'>
//           <TfiShoppingCart style ={{color: "brown", fontSize: "1.5em"}} />        
//         </button>
//         <Image className="cardImagen" boxSize='200px'
//           objectFit='cover'
//           w={'100px'}
//           src={Imagen}
//         />
//         <p>Cantidad: {quantity}</p>
//         <p>Precio: ${Precio}</p>
//         <button className="btn" onClick={() => removeItem(id)}> Eliminar </button>
//         <hr />
//     </div>
//   )
// }
// export default CartItem