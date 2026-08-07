# eFood — React, Styled Components e React Router

Projeto desenvolvido para o exercício da EBAC com base no layout **eFood** fornecido em Figma.

## Requisitos atendidos

- Projeto criado com React
- Estilização feita com Styled Components
- Navegação feita com React Router
- Página inicial com listagem de restaurantes
- Página interna de restaurante
- Componentes reutilizáveis
- Layout responsivo
- Configuração de SPA para publicação na Vercel

## Tecnologias

- React
- React Router DOM
- Styled Components
- Vite

## Como executar

```bash
npm install
npm run dev
```

Também é possível usar:

```bash
npm start
```

## Build

```bash
npm run build
```

A pasta gerada será `dist`.

## Rotas

- `/` — página inicial
- `/restaurante/:id` — página do restaurante

## Estrutura

```text
src/
├── components/
│   ├── Footer/
│   ├── HomeHero/
│   ├── Logo/
│   ├── MenuCard/
│   ├── RestaurantCard/
│   ├── RestaurantHeader/
│   └── RestaurantHero/
├── data/
│   └── restaurants.js
├── pages/
│   ├── Home/
│   └── Restaurant/
├── styles/
│   ├── GlobalStyle.js
│   └── shared.js
├── App.jsx
└── main.jsx
```

## Vercel

O arquivo `vercel.json` já está incluído para que o React Router funcione corretamente ao acessar ou atualizar uma rota interna.

Na Vercel, o projeto deve ser detectado como **Vite** e usar `dist` como diretório de saída.
