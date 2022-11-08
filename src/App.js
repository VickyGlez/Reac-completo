
import './App.css';
import React from 'react';
import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigos from './AgregarAmigo';
import {ContactoContext, ContactoProvider} from './Context/ContactoProvider';
import ModalAmigo from './ModalAmigo/ModalAmigo';

/*import {ContactoContext, ContactoProvider} from './Context/ContactoProvider';
import DummyComponent from './DummyComponent';
import DummyComponent2 from './DummyComponet2';
/*poner solo una etiqueta*/ 


function App(){
/*
  let contactos =[
      {
          nombre: "Jessy",
          telefono: "3221458974",
          correo:"gatito@gmail.com"

      },
      {
          nombre: "Jack",
          telefono: "3221248256",
          correo:"zorro@gmail.com"

      },
      {
        nombre: "Josue",
        telefono: "3221248256",
        correo:"zorro@gmail.com"

    },
      {
          nombre: "Arely",
          telefono: "3227284596",
          correo:"pollito@gmail.com"

      }

  ]*/

  /*let contactos;

  if (!localStorage.contactos)
  {
    localStorage.setItem("contactos", JSON.stringify([]));
    contactos=[];
  }
  else{
      contactos=JSON.parse(localStorage.contactos);
  }

  let[contactosList, setContactosList]=React.useState(contactos);
  let[ valorBusqueda, setValorBusqueda]=React.useState("");
  let cantidadAmigos=contactosList.length;
  let contactosFiltro;

  function borrarAmigo(telefono){
    const indice =contactos.findIndex(contacto=>contacto.telefono==telefono);
    let contactosTemporal=[...contactos];
    contactosTemporal.splice(indice,1);
    localStorage.setItem("contatos",JSON.stringify(contactosTemporal));
    setContactosList(contactosTemporal);
  }

  if(valorBusqueda.length>0)
  {
      let textoBusqueda=valorBusqueda.toLowerCase();
      contactosFiltro=contactos.filter((contacto)=>{
          let nombre=contacto.nombre.toLowerCase();
          if(nombre.includes(textoBusqueda))
          return contacto;
      });
    
  }
  else{
      contactosFiltro=contactosList;
  }*/
  return(
        <ContactoProvider>
          <ContactoContext.Consumer>
          {({
            cantidadAmigos,
            contactosFiltro,
            borrarAmigo,
            modal
          })=>( 
            <React.Fragment>
               <h1>Mi lista de contactos</h1>
          <h3>Tengo {cantidadAmigos} amigos</h3>
          <Busqueda/>
          <AgregarAmigos/>
          <Lista>
          {
                  contactosFiltro.map((contacto)=>{
                      return(<Contacto nombre={contacto.nombre}
                                            telefono={contacto.telefono}
                                            correo={contacto.correo}
                                            borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                  })
              }
          </Lista>
          {contactosFiltro.length===0 && <h1>No tengo amigos</h1>}
          {modal && <ModalAmigo/>}

            </React.Fragment>
          )}
          </ContactoContext.Consumer>

              </ContactoProvider>

  );
}

/*

<React.Fragment>
          <h1>{props.valorBusqueda}</h1>
          <div>
              {
                  contactosFiltro.map((contacto)=>{
                      return(<Contacto nombre={contacto.nombre}
                                            telefono={contacto.telefono}
                                            correo={contacto.correo}/>)
                  })
              }
          </div>
function App(){
  let [valorBusqueda,setValorBusqueda]=React.useState("");
  return(
    <React.Fragment>
      <h1>h1 desde App.js</h1>
      <Busqueda valorBusqueda={valorBusqueda} setValorBusqueda={setValorBusqueda}/>
      <Lista valorBusqueda={valorBusqueda}/>
    </React.Fragment>
  )
}


/*
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
function App(props) {
  let miDato=10;
  let miSegundoDato=5;
    <h1>{miDato + miSegundoDato}</h1>
  function suma(dato1,dato2){
    return dato1+dato2;
  }
  let respuesta;
  if (props.miDato>50)
  {
    respuesta="Número grande";
  }
else{
  respuesta="Número pequeño";
}
if(props.nombre){
  console.log(props.nombre);
}
  return (
    <h1>{respuesta} </h1>
  );
  return (
    poner solo una etiqueta*
    <React.Fragment>
    <h1>Camina hacia el futuro</h1>
    <div>hi </div>
    </React.Fragment>
  );
}
nunca borrar*/
export default App;
