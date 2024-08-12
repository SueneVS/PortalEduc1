# PORTAL EDUC - PARTE 1

Esta aplicação web foi desenvolvida para gerenciar informações sobre disciplinas e alunos em um ambiente educacional. O sistema permite o login de usuários, visualização e cadastro de alunos, e exibição de disciplinas por semestre.

## Funcionalidades

- **Página de Login:** Permite que os usuários façam login com email e senha.
- **Cadastro de Alunos:** Permite o registro de novos alunos com informações como nome, CPF, e-mail, celular e curso.
- **Visualização de Disciplinas:** Exibe disciplinas organizadas por semestre para o curso selecionado.
- **Listagem de Alunos:** Mostra uma lista de alunos com opções para pesquisar, editar e excluir registros.
- **Página Inicial (Home):** Fornece uma visão geral do sistema com informações importantes e links para acessar as principais funcionalidades.

## Estrutura do Projeto

1. **Home**
   - **Descrição:** A tela inicial da aplicação exibe informações importantes e acesso rápido a várias seções.
   - **Sessões:**
     - **Próximas Atividades:** Exibe cards com as próximas atividades a serem realizadas, como entrega de trabalho, avaliações, chat com o mentor, etc.
     - **Minhas Disciplinas:** Mostra as disciplinas do aluno para o semestre atual.
     - **Cursos Extras:** Apresenta cursos extras e/ou matérias eletivas que o aluno pode fazer para complementar sua grade curricular.

2. **Login**
   - Componente: `LoginComponent`
   - Página para autenticação de usuários.

3. **Cadastro de Alunos**
   - Componente: `CadastroAlunoComponent`
   - Página para registrar novos alunos.

4. **Disciplinas**
   - Componente: `DisciplinasComponent`
   - Exibe disciplinas por semestre para o curso selecionado.

5. **Listagem de Alunos**
   - Componente: `AlunosComponent`
   - Permite a visualização, pesquisa e gerenciamento de alunos.

6. **Serviço de Disciplinas**
   - Serviço: `DisciplinaService`
   - Fornece dados de disciplinas para os cursos.

## Tecnologias Utilizadas

- **Angular** - Framework para construção de aplicativos web.
- **TypeScript** - Linguagem utilizada para desenvolver a aplicação Angular.
- **SCSS** - Pré-processador CSS utilizado para estilização dos componentes.
- **ngPrime** - Biblioteca de componentes UI para Angular.
- **Node.js** - Ambiente de execução para JavaScript no servidor.
- **Angular CLI** - Interface de linha de comando para Angular.

