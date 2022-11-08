import React from "react";
import  {ContactoContext}  from "./Context/ContactoProvider";


function DummyComponent2(){
    const {dummy,setDummy}=React.useContext(ContactoContext);
    const miFuncion=()=>{
        setDummy("Memo");
    }
    return(
        <React.Fragment>
        <button onClick={miFuncion}>Picale</button>
        </React.Fragment>
        
    )
}

export default DummyComponent2;