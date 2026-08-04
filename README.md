# Exercício de orientação a objetos com JavaScript

Este projeto demonstra três conceitos de orientação a objetos:

1. **Abstração:** `Veiculo` reúne características e comportamentos comuns a
   diferentes tipos de veículos. Ela não pode ser instanciada diretamente.
2. **Herança:** `Carro` e `Moto` usam `extends Veiculo` para herdar propriedades
   e métodos da classe-base.
3. **Instâncias:** o código cria os objetos `carroPopular`, `carroEsportivo` e
   `motoUrbana`.

## Como executar

Abra o arquivo `index.html` no navegador. Os três veículos serão exibidos na
página. Para observar também a saída do JavaScript, abra as ferramentas do
desenvolvedor e acesse a aba **Console**.

Também é possível executar apenas o JavaScript pelo terminal:

```bash
node main.js
```

## Estrutura

- `index.html`: estrutura da página;
- `styles.css`: aparência e responsividade;
- `main.js`: classes, objetos e exibição dos resultados.
