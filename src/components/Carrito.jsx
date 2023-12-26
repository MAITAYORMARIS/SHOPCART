import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import '../styles/carrito.css';
import Button from './Button';
import { MdAddCircle } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

// recibe las propiedades para mostrar o cerrar el carrito
function Carrito({ mostrarCarrito, cerrarCarrito }) {
    const { carrito, agregarProducto, eliminarProducto, actualizarCantidad, mostrarPasarelaPago, mostrarPasarela } = useContext(AppContext);

    let total = 0; // variable para almacenar el total

    // Calcula el total recorriendo todo el array de productos en el carrito
    carrito.forEach((producto) => {
        total += producto.price * producto.cantidad; // Suma el precio * cantidad de cada producto al total
    });

    if (mostrarPasarela) {
        return null; // Si mostrarPasarela es true, no renderizar el carrito
    }
    return (
        <>
            <div className={`contenedorCarrito ${mostrarCarrito ? 'visible' : ''}`}>
                <h2>Tu carrito</h2>
                {carrito.length === 0 ?
                    (
                        <p>No tienes articulos seleccionados</p>
                    ) :
                    (

                        carrito.map((producto) => (
                            <div key={producto.id} className="itemsCarrito">
                                <div className="itemsCarritoImagen"><img src={producto.image} alt={producto.title}></img></div>
                                <p className="itemsCarritoNombre">{producto.title.substring(0,15)}</p>
                                <p style={{fontSize:"12px"}}>Total Item: USD {producto.price * producto.cantidad}</p>
                                <div className="accionesCarrito">
                                    <FaMinusCircle onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)} />
                                    <input className="cantidadItem" value={producto.cantidad} readOnly />
                                    <MdAddCircle style={{ fontSize: "20px" }} onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)} />
                                    <BsFillTrashFill style={{ fontSize: "25px" }} onClick={() => eliminarProducto(producto.id)} />
                                </div>
                            </div>

                        ))

                    )}
                    {carrito.length > 0 && <p style={{fontWeight:"bold", fontSize:"15px"}}> Total Compra: ${total.toFixed(2)}</p>}
                
                <div className="botonesCarrito">
                    <Button className="atencion" titulo="Cerrar" onClick={cerrarCarrito} />
                    {carrito.length > 0 && <Button className="accion" titulo="Finalizar Compra" onClick={mostrarPasarelaPago} />}
                </div>

            </div >
        </>
    )
}

export default Carrito;