import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartItem.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton } from "@mui/material";

const CartItem = ({ items, isCart = false }) => {
	const { deleteFromCart } = useContext(CartContext);

	return (
		<section className="cart-item-container">
			{items.map((item) => (
				<div key={item.id} className="cart-item">
					<div className="cart-item-item">
						<img
							src={item.image}
							alt={item.name}
							title={item.name}
							style={{ width: "100px" }}
						/>
						<div className="">
							<h4>{item.name}</h4>
							<h4 className="cart-item-quantity">X {item.quantity}</h4>
							<h5>$ {item.price * item.quantity}</h5>
						</div>
					</div>
					{isCart && (
						<IconButton
							aria-label="cart"
							title="Remove from cart"
							onClick={() => deleteFromCart(item.id)}
						>
							<DeleteOutlinedIcon />
						</IconButton>
					)}
				</div>
			))}
		</section>
	);
};

export default CartItem;












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