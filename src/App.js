import { useState } from "react";
import { TextInput } from "./Components/TextInput";
import { Input } from "./Components/Input";
import { CursoEscolher} from "./Components/CursoEscolher";
import { Listagem } from "./Components/Lista";
import { Formulario } from "./Components/Formulario";


function App() {

const [unidade, setUnidade] = useState ('Unidade São Paulo')
const [value, setValue] = useState ('Insira Curso Escolhido...')
const [curso, setAge] = useState ('3')
const [aluno, setAluno] = useState ()
const [aluninhos,setAluninhos] = useState('Digite o nome do aluno')

//const list e const colNames estão com as infos da tabela 2 que esta lá no class app
const list = [
             {id: 1, name: "Thales Ferri Juliani", Idade: 40 },
             {id: 2, name: "Pedro S. Andrade", Idade: 19 },
             {id: 3, name: "Tatiana Andrade", Idade: 21 },
            ]
const colNames = ["id:" , "Name:", "Age Year:" ]



//abaixo faz ligação com a const e componete

  return (
      <div>
        <p className='titulo'> Escola de Estética Av. Paulista </p>  
        <p className='titulo2'> Invista XXX em seu Futuro </p>  
        <p className='titulo3'> Educação de Qualidade </p>  

        <p style = {{backgroundColor:'black'}} className='Unidade'>  <TextInput value={unidade} onChangeValue={setUnidade} /> </p>

        <p style = {{backgroundColor: 'yellow'}} className='tituloCurso'> Escolha: 1- Curso Drenagem Linfática / 2 - Botox </p>  
        <p style = {{backgroundColor: 'yellow'}} className='nomecurso'> <Input type="text" value={value} onChangeValue={setValue} /> </p>
        <p style = {{backgroundColor: 'yellow'}} className='escolhecurso'> <CursoEscolher curso = {value} /> </p>

        <p style = {{backgroundColor: 'blue'}} className= 'lista.alunos'> <Listagem aluno = {setAluno} /> </p>

        <p style = {{backgroundColor: 'grey'}}className='formulario'> < Formulario aluninhos = {setAluninhos} />  </p>

    
      </div>
   )
}


export default App;
