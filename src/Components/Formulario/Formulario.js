import React, { useState } from 'react'

export function Formulario ({aluninhos}) {

const [aluninhos,setAluninhos] = useState('Digite o nome do aluno')

return (
    <>
        <label> Digite o nome do Aluninhos  </label>
        <input 
        type="Text" 
        name="fnome" 
        value={aluninhos}
        onChange={(e)=>setAluninhos(e.target.value)}
        />
        <p> Nomes Digitados: {aluninhos} </p>
    </>
) 

}
