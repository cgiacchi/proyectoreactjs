import './CartWidget.css';
import { TfiShoppingCart } from "react-icons/tfi";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useCartContext(); 
  return (
    <div className='widgetCarrito'>
      <button className='button-cart'> 
        <TfiShoppingCart style={{ color: "brown", fontSize: "1.5em" }} />
      </button>
      <Link to="/cart" style={{ display: cantidadTotal > 0 ? 'block' : 'none'  }}>
      <span className="material-symbols-outlined">Shopping_cart</span>
        {cantidadTotal > 0 && <strong className='cantidad'>{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default CartWidget;

