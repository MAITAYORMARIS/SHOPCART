import React from "react";
import '../styles/button.css';

function Button(props) {
    const handleClick = () => {
         // Verifica si la prop "mensaje" está definida antes de mostrar la alerta
        if (props.mensaje) {
            alert(props.mensaje);
            props.onClick();
        }
         // si no hay mensaje ejecuta la accion directamente
        props.onClick();

        // alert(props.mensaje)
        // if (props.onClick) {
        //     // Verifica si la prop "mensaje" está definida antes de mostrar la alerta
        //     if (props.mensaje) {
        //         alert(props.mensaje);
        //     }
        //     props.onClick();
        // }
    }
    return (
        <>
            <button className={props.clase} onClick={handleClick}>{props.titulo}</button>
        </>
    )
}
export default Button;