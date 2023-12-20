import React, {useContext, useState} from "react";
import AppContext from "../context/AppContext";
import '../styles/header.css';
import { FaCartShopping } from "react-icons/fa6";
import Carrito from './Carrito';


function Header() {
    const { carrito } = useContext(AppContext);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const handleClick = () => {
        // Cambia el estado para mostrar u ocultar el carrito
        setMostrarCarrito(!mostrarCarrito);
    }

    const cerrarCarrito = () => {
        // Cierra el carrito estableciendo el estado mostrar en falso
        setMostrarCarrito(false);
    }

    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    return (
        <>
            <div className="contenedorHeader">
                <div className="contenedorLogo"><img src="https://picsum.photos/200/300?random=2" alt="logo" /></div>
                <div className="contenidoHeader">
                    <h1>Shop Cart</h1>
                </div>
                <div className="carritoSigno" onClick={handleClick}><FaCartShopping style={{ fontSize: "25px" }}  /><p>{totalProductos}</p></div>
                {/* Pasa el estado y la función para cerrar el carrito como props */ }
                <Carrito mostrarCarrito={mostrarCarrito} cerrarCarrito={cerrarCarrito} />
            </div>
        </>
    )
}
export default Header;