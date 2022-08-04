import React from "react";
import "../hojasEstilo/Testimonio.css";

function Testimonio(props) {
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
            alt={require(`Foto de ${props.nombre}`)} />
            <div className='contendor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-testimonio'>{props.cargo} en 
                <strong>{props.empresa}</strong>
                </p>
                <p className='texto-testimonio'>"{props.texto}"</p>
            </div>
        </div>
    );
}

export default Testimonio;
