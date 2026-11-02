# Book Store Manager CLI

## Sobre o projeto

O Book Store Manger CLI é um projeto no qual reúne funções como cadastrar, atualizar, deletar, listar e consultar um dado em específico, para ver como funciona o uso de dados em um sistema "real".

## Tecnologias utilizadas

- Node.js
- TypeScript
- PostgreSQL
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/gabriellunelli/BookStore-Manager-CLI
```
Acesse a pasta do projeto:

```bash
cd BookStore-Manager-CLI
```
Instale as dependências:

```bash
npm install
```
Como executar

```bash
npm dev
```
## Estrutura do projeto

```bash
BookStore-Manager-CLI/
│
├── src/
│   ├── main.ts
│   ├── models/
│   │   ├── ClientesModel.ts
│   │   ├── EmprestimoModel.ts
│   │   ├── LivroModel.ts
│   │   └── AutorModel.ts
│   ├── repositories/
│   │   ├── ClientesRepository.ts
│   │   ├── EmprestimoRepository.ts
│   │   ├── LivroRepository.ts
│   │   └── AutorRepository.ts
│   ├── data/
│   │   ├── seed.ts
│   │   └── store.ts
│   ├── database/
│   │   ├── der.png
│   │   └── script.sql
│   ├── menus/
│   │   └── Opcoes.ts
│   └── utils/
│       ├── entrada.ts
│       ├── formatarTexto.ts
│       ├── verificarResposta.ts
│       └── verificarVazio.ts
│
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```


Branches utilizadas

- main
- develop
- feat/clientes
- feat/emprestimos
- feat/livros
- feat/autores
- feat/banco-dados
- docs/readme

Observação final:
No último commit sobre o sistema eu realizei o tratamento de erros com i.a, não me orgulho disto, porém fiz...

### Deus abençoe!