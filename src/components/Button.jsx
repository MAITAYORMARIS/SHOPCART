import React from "react";
import '../styles/button.css';
import Swal from 'sweetalert2';

function Button(props) {
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   });
    const handleClick = () => {

        // Verifica si la prop "mensaje" está definida antes de mostrar la alerta
        if (props.mensaje) {
            // alert(props.mensaje);
            Swal.fire({
                title: "Listo",
                text: props.mensaje,
                icon: "success"
              }); 
        }

        // Verifica si props.onClick es una función antes de llamarla
        if (typeof props.onClick === 'function') {
            props.onClick();
        }





        // Verifica si la prop "mensaje" está definida antes de mostrar la alerta
        // if (props.mensaje) {
        //     alert(props.mensaje);
        //     props.onClick();
        // }
        //  // si no hay mensaje ejecuta la accion directamente
        // props.onClick();

    }
    return (
        <>
            <button className={props.className} onClick={handleClick}>{props.titulo}</button>
        </>
    )
}
export default Button;