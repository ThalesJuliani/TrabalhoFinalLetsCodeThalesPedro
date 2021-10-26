export function Listagem ({aluno}) {

const alunos = [ 'Thales Juliani' , 'Pedro Andrade' , 'Tatiane Andrade']

const listaaluno = alunos.map(
    (a)=> <p> {a} </p>
  
)

return <ul> {listaaluno} </ul>


}