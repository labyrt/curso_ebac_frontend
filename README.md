# eFood — Parte 4: Checkout e confirmação do pedido

Entrega da Parte 4 do projeto eFood da EBAC, mantendo as etapas anteriores em branches separadas.

## Requisitos atendidos

- Página de entrega do pedido
- Etapa de pagamento integrada ao checkout
- POST para `https://api-ebac.vercel.app/api/efood/checkout`
- Tela de confirmação exibida somente após a resposta da API
- Número do pedido preenchido com o `orderId` retornado pela API
- Carrinho gerenciado com Redux Toolkit
- Cálculo do valor total do pedido
- Tratamento de carregamento e erro ao concluir o checkout
- GitHub Pages configurado sem substituir a publicação da Parte 3

## Fluxo

1. O usuário escolhe um restaurante e adiciona produtos ao carrinho.
2. Na página `/carrinho`, o usuário pode alterar quantidades ou remover itens.
3. Ao clicar em **Continuar com a entrega**, segue para `/checkout`.
4. Preenche endereço e dados de pagamento.
5. Ao clicar em **Concluir pedido**, a aplicação envia o POST para a API da EBAC.
6. Somente após a resposta bem-sucedida, o carrinho é limpo e a aplicação abre `/pedido-confirmado` com o número retornado pela API.

## Tecnologias

- React 18
- Redux Toolkit
- React Redux
- React Router DOM
- Styled Components
- Vite
- Fetch API

## Execução local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Branch

`efood_parte_4_checkout`

## GitHub Pages

A publicação da Parte 4 foi preparada para:

`https://labyrt.github.io/curso_ebac_frontend/efood-parte-4/`

A Parte 3 permanece em:

`https://labyrt.github.io/curso_ebac_frontend/efood-parte-3/`
