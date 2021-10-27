import { useState } from "react";
import LedVerde from "./Components/Imgs/LedVerde.jpg"
import LedVermelho from "./Components/Imgs/LedVermelho.jpg"

export function Botao(props) {

     return (
      <>
        <img style = {{width: '50px'}} src={props.ligado?LedVerde:LedVermelho} />
        <button onClick={()=>props.setLigado(!props.ligado)}>
            {props.ligado?'Desligar':'Ligar'} 
        </button>
      </>
     );
}