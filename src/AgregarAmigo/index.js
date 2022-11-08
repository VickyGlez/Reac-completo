import React from "react";
import { ContactoContext } from "../Context/ContactoProvider";



function AgregarAmigos(params){
    let {setModal}=React.useContext(ContactoContext);
    const abreModal=()=>{
        setModal(true);
    }
    return(
        <button onClick={abreModal}>+Amigos</button>
    )
}

export default AgregarAmigos;