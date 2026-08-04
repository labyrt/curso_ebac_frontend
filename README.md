# Calculadora Aritmética com VueJS

Projeto desenvolvido com Vue 3 e Vite. A calculadora possui dois campos
numéricos e um campo de seleção com quatro operações aritméticas. O resultado é
recalculado automaticamente sempre que um número ou a operação é alterado, sem
o uso de botão.

## Funcionalidades

- Adição, subtração, multiplicação e divisão;
- Cálculo automático com `computed` do Vue;
- Suporte a números inteiros, decimais e negativos;
- Tratamento de campos vazios e divisão por zero;
- Interface responsiva e acessível.

## Como executar

É necessário ter o Node.js instalado. No terminal, dentro da pasta do projeto,
execute:

```bash
npm install
npm run dev
```

Depois, abra o endereço indicado pelo Vite no navegador.

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos finais serão criados na pasta `dist`.
