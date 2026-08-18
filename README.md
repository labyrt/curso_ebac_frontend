# eFood — Parte 2: AJAX e modal de produto

Segunda etapa do projeto eFood da EBAC, criada em uma branch separada para preservar integralmente a entrega anterior.

## Requisitos atendidos

- layout baseado no arquivo oficial do Figma;
- restaurantes e cardápios carregados por AJAX com a Fetch API;
- integração com `https://api-ebac.vercel.app/api/efood/restaurantes`;
- estados de carregamento, erro e restaurante não encontrado;
- modal de produto com foto, nome, descrição, porção e preço;
- fechamento pelo botão, clique no fundo ou tecla `Esc`;
- botão para adicionar o item ao carrinho;
- layout responsivo para desktop, tablet e celular.

## Tecnologias

- React
- React Router DOM
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

- `/` — restaurantes recebidos da API;
- `/restaurante/:id` — capa e cardápio do restaurante selecionado.
