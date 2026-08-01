# Exercício de TypeScript

Este projeto contém duas funções com tipagem explícita:

- `multiplicar(numero1: number, numero2: number): number`: recebe dois números e retorna o produto deles;
- `saudar(nome: string): string`: recebe um nome e retorna a saudação `Olá nome`.

## Como executar

É necessário ter o Node.js instalado. No terminal, dentro desta pasta, execute:

```bash
npm install
npm run build
npm start
```

Saída esperada:

```text
Resultado da multiplicação: 42
Olá Lucy
```

Para verificar a tipagem sem gerar arquivos compilados:

```bash
npm run check
```
