import React, { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="container contenedor-counter" id="itemcount">
			<div className="row">
				<div className="col-lg-6">
					<button disabled={count <= 1} onClick={decrease} className="counter"> - </button>
					<span className="counter-number">{count}</span>
					<button disabled={count >= stock} onClick={increase} className="counter"> + </button>
				</div>
				<div className="col-lg-4 " >
					<button disabled={stock <= 0} onClick={() => onAdd(count)} className="card-reservar"> Reservar </button>
				</div>
			</div>
		</div>

	);
};

export default ItemCount;