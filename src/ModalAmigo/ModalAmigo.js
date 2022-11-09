import React from "react";
import "./ModalAmigo.css";
import{ContactoContext} from "./../Context/ContactoProvider"

function ModalAmigo(){
    let {setModal, agregarAmigo}=React.useContext(ContactoContext);
    let[amigui,setAmigui]=React.useState({
        nombre:"",
        correo: "",
        telefono: ""
    });

    const modalCancelar=(event)=>{
        event.preventDefault();
        setModal(false);
    }
    const modalGuardar=(event)=>{
        event.preventDefault();
        agregarAmigo(amigui);
        setModal(false);
    }
    const onChangeNombre=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.nombre= event.target.value;
        setAmigui(amiguiTemporal);
    }

    const onChangeCorreo=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.correo= event.target.value;
        setAmigui(amiguiTemporal);
    }
    const onChangeTelefono=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.telefono= event.target.value;
        setAmigui(amiguiTemporal);
    }

    return(
        <div className="modal">
        <h1 className="modal_header">Modal Amigo</h1>
        <form className="modal_formulario">
            <input typeof="text" placeholder="Nombre" onChange={onChangeNombre}/>
            <input typeof="text" placeholder="Email"  onChange={onChangeCorreo}/>
            <input typeof="text" placeholder="Teléfono"  onChange={onChangeTelefono}/>
            <button typeof="submit" onClick={modalGuardar}> Guardar</button>
            <button onClick={modalCancelar}> Cancelar</button>

        </form>
        </div>
    )
}

export default ModalAmigo;