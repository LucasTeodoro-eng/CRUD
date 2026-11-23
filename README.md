Crie um README.md em português para o projeto abaixo. Seja objetivo e use só o que está descrito aqui, sem inventar funcionalidades.

Projeto: API RESTful de CRUD de curso (parte 1 de 4: apenas o CREATE).

Tecnologias: Node.js com module js ("type": "module"), Express e SQLite3 (pacote sqlite3).

Arquitetura em camadas, dentro de src/: route, controller, service, repository e config, mais o server.js. Fluxo: route → controller → service → repository → banco.

Banco: SQLite3, arquivo database.db na raiz, criado automaticamente ao subir o servidor. Tabela curso:
- id_curso: INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL
- nome, area, nivel, modalidade: TEXT NOT NULL

Rota implementada: POST /cursos
- 201: curso criado
- 400: campo obrigatório ausente
- 500: erro interno do banco
Exemplo de body:
{ "nome": "Engenharia de Software", "area": "Tecnologia", "nivel": "Graduação", "modalidade": "Presencial" }

Como rodar:
1. npm install
2. npm start (porta 3000) ou npm run dev (reinicia ao salvar)
3. Testar com o Thunder Client: POST http://localhost:3000/cursos
4. Ver os dados com a extensão SQLite Viewer abrindo o database.db

Observação: se o npm bloquear o script de instalação do sqlite3, rodar `npm install-scripts approve sqlite3` e depois `npm rebuild sqlite3`.

O README deve ter as seções: Descrição, Tecnologias, Estrutura de pastas, Banco de dados, Como executar, Endpoint (com exemplos de requisição e resposta), Status do projeto (apenas CREATE; GET, PUT e DELETE nas próximas partes).