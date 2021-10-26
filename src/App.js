import { useState } from "react";
import { TextInput } from "./Components/TextInput";
import { Input } from "./Components/Input";
import { CursoEscolher} from "./Components/CursoEscolher";
import { Listagem } from "./Components/Lista";
import { Table } from "./Components/Table";


function App() {

const [apelido, setName] = useState ('Unidade São Paulo')
const [value, setValue] = useState ('Insira Curso Escolhido...')
const [curso, setAge] = useState ('3')
const [aluno, setAluno] = useState ()
const list = [
  {id: 1, name: "Thales Juliani", Idade: 41 },
  {id: 2, name: "Pedro Andrade", Idade: 19 },
  {id: 3, name: "Tatiana Andrade", Idade: 20 },
              ]
const colNames = ["id" , "Name", "Idade" ]


  return (
    <div>
      <p className='titulo'> Escola de Estética Av. Paulista </p>  
      <p className='titulo2'> Invista em seu Futuro </p>  
      <p className='titulo3'> Educação de Qualidade </p>  
      <p className='Unidade'>  <TextInput value={apelido} onChangeValue={setName} /> </p>

      <p className='tituloCurso'> Escolha: 1- Curso Drenagem Linfática / 2 - Botox </p>  
      <p className='nomecurso'> <Input type="text" value={value} onChangeValue={setValue} /> </p>
      <p className='escolhecurso'> <CursoEscolher curso = {value} /> </p>

      <p className= 'lista.alunos'> <Listagem aluno = {setAluno} /> </p>

   </div>
    );

 class App extends Component {
   render () {
     return (
      <div className="Tabela">
        <Table list={list} colNames={colNames} />
      </div>
     )
   }
  }
 
}

export default App;
