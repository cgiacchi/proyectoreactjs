import { useState } from 'react';
import { useCartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc, } from 'firebase/firestore';
import './Checkout.css'


export const Checkout = () => {

  const { cart, eliminar, totalPrice } = useCartContext();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [correo2, setCorreo2] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const manejodeForm = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !correo || !correo2|| !telefono ) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (correo !== correo2) {
      setError('Los campos de email no coinciden');
      return;
    }
    const total = totalPrice();
    const orden = { items: cart.map((producto) => ({
        id: producto.id, nombre: producto.title, cantidad: producto.quantity,})),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      correo,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const db = getFirestore();
        const productoRef = doc(db, 'products', productoOrden.id);

        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, 'orders'), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            eliminar();
          })
          .catch((error) => {
            console.log('Error al generar la orden', error);
            setError('Error en orden');
          });
      })
      .catch((error) => {
        console.log('No se puede actualizar la cantidad de departamentos', error);
        setError('No se actualizo el departamento');
      });

    setNombre('');
    setApellido('');
    setCorreo('');
    setCorreo2('');
    setTelefono('');
  };

  return (
    <>
    <div className='form-general'>
      <h2 className="titulo-form">
        Rellena tus datos!
      </h2>

      <form onSubmit={manejodeForm} className='cuerpo-form'>
        {cart.map((producto) => (
          <div className="item-check" key={producto.id}>
            <p>
              {' '}
              {producto.nombre} {producto.cantidad}
            </p>
            <p> {producto.precio} </p>
          </div>
        ))}

        <div className="form-group">
          <label className="lab-check">Nombre </label>
          <input
            className="input-check"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Apellido </label>
          <input
            className="input-check"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="lab-check">Correo electronico </label>
          <input
            className="input-check"
            type="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Confirme su correo </label>
          <input
            className="input-check"
            type="correo2"
            value={correo2}
            onChange={(e) => setCorreo2(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Telefono </label>
          <input
            className="input-check"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        {error && <p className="error-campos">{error}</p>}

        {ordenId && (
          <p className="orden">
            ¡Gracias por tu compra! <br /> Este es tu numero de orden: <br />{' '}
            {ordenId}{' '}
          </p>
        )}

          <button className='form-boton' type="submit">
            Reservar
          </button>
        <br/>
        <div>
        <Link to="/" className="regresar">
          <button className="regresar">Volver al inicio</button>
        </Link>
        </div>
      </form>
      </div>
    </>
  );
};

export default Checkout;
