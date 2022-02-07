Rever aula tabelas (Table, Cabeçalho Tabelha , Linha Tabela e Células)
.map para cada aluno um table row / linha da tabela x preencher dentro dessa linha cada campo
Fazer base do funcional e depois enbelezar
Manejo de estados e parte assincrona


O sistema será desenvolvido conforme necessidade do cliente " Escola de Estética Av. Paulista" que precisa de um ambiente de gerenciamento de presença em sala de aula de seus alunos.

Exigências:

1 - Header e Footer padrão conforme site Institucional wwww.escoladeesteticaavpaulista.com.br;

2 - Site/Página Responsivo;

3 - Ambiente logado (Tela 1), após login deverá aparecer um Spinners de Loading (animação CSS); 
- Componente "Adicionar" será reutilizado na tela 2

Botão de Login altera State (Professor) + Spinner para simular requisição com 3s muda state = aparece algo a mais na tela

4 - Ambiente/Tela (Tela 2), principal com os seguintes campos:
    a) Nome do Curso (dirteto no App.js - parágrafo personalizado)
    b) Nome do Professor (dirteto no App.js - parágrafo personalizado)
    c) Data (componet "Seleção")
    d) Inclusão de Nome de Aluno (componet "Tabela/Grid/Adicionar e Botão") - Gerados através de API (Professor++ consultar API para retornar lista de pessoas com estado)
    e) Lixeira para Exclusão do nome do aluno (componet "Remove")
    e) Check Box para flegar para (component "Check Box")

Requisição , estado incial [array], adicionar e remover

API de Mapa - Component Google que fornesse o mapa (Professor)
Componente Funcional e Componente de Classe
Usar UseEffect para evitar Loopings infinitos
Navegação utilizar REact DOM
Uso do Hook use Context
Estar GITHub (ok)
Hospedar o projeto em algum lugar (.github.io)



const [alunos, setAlunos] = useState(['Rodrigo, 'Dodo', 'Nina'])

Caixa de Texto para escrever algum nome, fazer um excelente trabalho.
