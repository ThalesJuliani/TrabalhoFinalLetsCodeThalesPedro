export function CursoEscolher({curso}) {
    if ( curso == 1) {
        return <p> Curso de Drenagem Lifática - Dia 31/10 - Domingo</p>      
      } 
      else if ( curso == 2) 
      {
      return <p> Curso de Botox - Dia 30/10 - Sabado</p>
      }
      else  
     {
     return <p> Curso Dia - Aguardando Informação</p>
     } 
       
}