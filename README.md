# eFood — Parte 3: carrinho com Redux

Terceira etapa do projeto eFood da EBAC. Esta versão parte da entrega com AJAX e modal de produto e acrescenta uma página de carrinho gerenciada pelo Redux Toolkit.

## Requisitos atendidos

- layout baseado no arquivo oficial do Figma;
- restaurantes e cardápios carregados pela API da EBAC;
- modal de detalhes do produto;
- página dedicada ao carrinho em `/carrinho`;
- estado global com Redux Toolkit;
- integração React/Redux com `Provider`, `useSelector` e `useDispatch`;
- adição, remoção e alteração de quantidade;
- contador de produtos no cabeçalho;
- soma automática de preço × quantidade;
- layout responsivo.

## Tecnologias

- React
- React Router DOM
- Redux Toolkit
- React Redux
- Styled Components
- Vite
- Fetch API

## Como executar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Rotas

- `/` — restaurantes;
- `/restaurante/:id` — cardápio e modal de produto;
- `/carrinho` — produtos selecionados e valor total.
