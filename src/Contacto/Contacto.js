import React from "react";


function Contacto(props){
    function miFuncion(){
        props.borrarAmigo();
    }

    return(
        <div className="Contacto">
            <h2>{props.nombre}</h2>
            <p>
                {props.telefono} - {props.correo}
            </p>
            <button className="botoncito" onClick={miFuncion}>Eliminar</button>
        </div>
        
    );
    
}

export default Contacto;