import { useState } from "react";
import { TextInput } from "./Components/TextInput";
import { Input } from "./Components/Input";
import { CursoEscolher} from "./Components/CursoEscolher"
import { Listagem } from "./Components/Lista";

function App() {

const [nome, setName] = useState ('Unidade São Paulo')
const [value, setValue] = useState ('Insira Curso Escolhido...')
const [curso, setAge] = useState ('3')
const [aluno, setAluno] = useState ()

  return (
    <div>
      <p className='titulo'> Escola de Estética Av. Paulista </p>  
      <p className='titulo2'> Invista em seu Futuro </p>  
      <p className='titulo3'> Educação de Qualidade </p>  
      <p className='Unidade'>  <TextInput value={nome} onChangeValue={setName} /> </p>

      <p className='tituloCurso'> Escolha: 1- Curso Drenagem Linfática / 2 - Botox </p>  
      <p className='nomecurso'> <Input type="text" value={value} onChangeValue={setValue} /> </p>
      <p className='escolhecurso'> <CursoEscolher curso = {value} /> </p>

      <p className= 'lista.alunos'> <Listagem aluno = {setAluno} /> </p>
    
    </div>
 
  );
}

export default App;
