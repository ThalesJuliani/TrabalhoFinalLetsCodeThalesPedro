import { useState } from "react";

export function Botao() {

  const [ligado, setLigado] = useState (false)

  return (
      <>
        <img style = {{width: '50px'}} src={ligado?LedVerde:LedVermelho} />
        <button onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'} </button>
      </>
  );
}