# Exercício de TypeScript

Projeto completo com duas funções tipadas e uma interface web interativa:

- `multiplicar(numero1, numero2)`: recebe dois números e retorna o produto;
- `saudar(nome)`: recebe um nome e retorna uma saudação personalizada.

## Executar no navegador

```bash
npm install
npm run dev
```

Para criar a versão de produção usada pela Vercel:

```bash
npm run build
```

## Executar no terminal

```bash
npm start
```

Para verificar somente a tipagem:

```bash
npm run check
```

## Deploy na Vercel

O projeto está configurado para Vite. A Vercel executa `npm run build` e publica a pasta `dist` automaticamente.
