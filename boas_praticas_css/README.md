# Exercício — Boas práticas de CSS com BEM

Este projeto aplica a metodologia BEM à marcação HTML e aos estilos CSS do
material de apoio, preservando o layout original.

## Estrutura BEM utilizada

- Bloco: `products`
- Elementos: `products__item`, `products__image`, `products__name` e
  `products__description`
- Modificador: `products__item--featured`

Na metodologia BEM:

- `bloco` identifica um componente independente;
- `bloco__elemento` identifica uma parte pertencente ao bloco;
- `bloco__elemento--modificador` representa uma variação desse elemento.

## Como visualizar

Abra o arquivo `index.html` no navegador.

## Publicação na branch solicitada

No terminal, dentro da pasta do projeto, execute:

```bash
git checkout -b boas_praticas_css
git add .
git commit -m "Aplica metodologia BEM ao HTML e CSS"
git push -u origin boas_praticas_css
```
