# Exercício Cypress - EBAC

Projeto de testes end-to-end criado com Cypress para validar as principais funcionalidades da aplicação **Agenda de Contatos**:

- inclusão de um contato;
- alteração de um contato;
- remoção de um contato.

Aplicação testada:

https://ebac-agenda-contatos-tan.vercel.app/

## Estrutura

```text
.
├── cypress/
│   ├── e2e/
│   │   └── agenda-contatos.cy.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

## Instalação

Na raiz do projeto, execute:

```bash
npm install
```

## Executar com a interface do Cypress

```bash
npm run cypress:open
```

Depois escolha **E2E Testing** e execute o arquivo:

```text
cypress/e2e/agenda-contatos.cy.js
```

## Executar no terminal

```bash
npm test
```

ou:

```bash
npm run cypress:run
```

## O que é validado

### Inclusão
Preenche nome, e-mail e telefone, adiciona o contato e verifica se os três dados aparecem na agenda.

### Alteração
Cria um contato específico para o teste, aciona a edição, altera nome, e-mail e telefone, salva e confirma que os novos dados aparecem na agenda.

### Remoção
Cria um contato específico para o teste, remove esse contato e confirma que ele deixou de existir na lista.

## Observação

Os testes criam os próprios contatos necessários para cada cenário. Assim, eles não dependem de um contato específico já existente na aplicação.
