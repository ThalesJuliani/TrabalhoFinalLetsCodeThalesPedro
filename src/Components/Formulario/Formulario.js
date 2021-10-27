
// function origem da Tabela 1
    import {useState } from "react";
    export function Formulario () {

    const [aluninhos, setAluninhos] = useState('Digite o nome do aluno')

    return (
        <>
            <label> Professor Digite o nome do ALUNO  </label>
            <input 
            type="Text" 
            name="fnome" 
            value={aluninhos}
            onChange={(e)=>setAluninhos(e.target.value)}
            />
            <p> Lista de Alunos Presente: (lista abaixo professor insere no text input acima) </p>
            <b className="nomealuno"> {aluninhos}</b>
        </>
    );    
    }
