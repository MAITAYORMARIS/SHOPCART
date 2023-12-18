import React from "react";
import '../styles/header.css';
import { FaCartShopping } from "react-icons/fa6";
import Carrito from './Carrito';
import { useState } from "react";

function Header() {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const handleClick = () => {
        // Cambia el estado para mostrar u ocultar el carrito
        setMostrarCarrito(!mostrarCarrito);
    }

    const cerrarCarrito = () => {
        // Cierra el carrito estableciendo el estado mostrar en falso
        setMostrarCarrito(false);
    }
    return (
        <>
            <div className="contenedorHeader">
                <div className="contenedorLogo"><img src="https://picsum.photos/200/300?random=2" alt="logo" /></div>
                <div className="contenidoHeader">
                    <h1>Shop Cart</h1>
                </div>
                <div className="carritoSigno"><FaCartShopping style={{ fontSize: "25px" }} onClick={handleClick} /><p>1</p></div>
                {/* Pasa el estado y la función para cerrar el carrito como props */ }
                <Carrito mostrarCarrito={mostrarCarrito} cerrarCarrito={cerrarCarrito} />
            </div>
        </>
    )
}
export default Header;