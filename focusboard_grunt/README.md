# FocusBoard — exercício Grunt

Projeto de um painel de produtividade responsivo criado para praticar automação de tarefas com **Grunt**. A aplicação permite adicionar, concluir, filtrar e excluir tarefas; os dados ficam salvos no navegador com `localStorage`.

## Requisitos atendidos

- `Gruntfile.js` criado e configurado;
- compilação de LESS para CSS com `grunt-contrib-less`;
- compressão de JavaScript com `grunt-contrib-uglify`;
- tarefa padrão que executa as duas operações;
- arquivos de origem separados de seus arquivos compilados;
- instruções de publicação na branch `exercicio_grunt`.

## Estrutura

```text
focusboard_grunt/
├── dist/
│   ├── scripts/main.min.js
│   └── styles/main.css
├── src/
│   ├── scripts/main.js
│   └── styles/
│       ├── main.less
│       ├── mixins.less
│       ├── reset.less
│       └── variables.less
├── Gruntfile.js
├── index.html
└── package.json
```

## Como executar

Tenha o Node.js instalado, abra o terminal na pasta do projeto e rode:

```bash
npm install
npm run build
```

O comando `npm run build` executa a tarefa padrão do Grunt:

1. compila `src/styles/main.less` em `dist/styles/main.css`;
2. comprime `src/scripts/main.js` em `dist/scripts/main.min.js`.

Também é possível executar cada etapa separadamente:

```bash
npm run build:less
npm run build:js
```

Depois, abra o arquivo `index.html` no navegador.

## Como criar a branch e publicar

Dentro do repositório do curso, use:

```bash
git checkout -b exercicio_grunt
git add .
git commit -m "Adiciona exercício de automação com Grunt"
git push -u origin exercicio_grunt
```

Se a branch já existir, use:

```bash
git checkout exercicio_grunt
```

O link para entregar terá este formato:

```text
https://github.com/SEU-USUARIO/SEU-REPOSITORIO/tree/exercicio_grunt
```
