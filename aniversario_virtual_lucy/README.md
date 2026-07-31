# Lucy está online — aniversário virtual

Landing page responsiva de evento inspirada no MSN, no dreamcore e nos memes brasileiros da internet entre 2000 e 2010. O contador calcula automaticamente o próximo dia **13 de abril**, então não precisa ser atualizado todos os anos.

## Rodar no computador

1. Instale o Node.js.
2. Abra esta pasta no VS Code.
3. No terminal, execute `npm install`.
4. Execute `npm run dev`.
5. Abra `http://localhost:3000`.

## Subir para uma branch do GitHub

Copie todos os arquivos desta pasta para a branch do exercício, faça o commit e envie para o GitHub. Não envie as pastas `node_modules`, `.next` ou `.vercel`.

## Publicar na Vercel

Importe o repositório na Vercel e escolha a branch do exercício. O projeto já inclui `vercel.json`, então a Vercel detectará o Next.js. Se ele estiver dentro de uma subpasta do repositório, selecione essa pasta em **Root Directory**. Depois, clique em **Deploy** sem alterar os comandos automáticos.

## Estrutura principal

- `app/page.tsx`: conteúdo, temporizador e interações.
- `app/globals.css`: visual, animações e responsividade.
- `app/layout.tsx`: título, descrição e idioma da página.
- `vercel.json`: identificação automática do framework na Vercel.
