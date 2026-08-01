<script setup>
import { computed, ref } from 'vue'
import { calcular, operacoes } from './calculadora.js'

const primeiroNumero = ref(null)
const segundoNumero = ref(null)
const operacao = ref('somar')

const numerosValidos = computed(() => {
  return (
    primeiroNumero.value !== null &&
    primeiroNumero.value !== '' &&
    segundoNumero.value !== null &&
    segundoNumero.value !== '' &&
    Number.isFinite(Number(primeiroNumero.value)) &&
    Number.isFinite(Number(segundoNumero.value))
  )
})

const divisaoPorZero = computed(() => {
  return operacao.value === 'dividir' && Number(segundoNumero.value) === 0
})

const resultado = computed(() => {
  if (!numerosValidos.value || divisaoPorZero.value) return null

  const numeroA = Number(primeiroNumero.value)
  const numeroB = Number(segundoNumero.value)
  return calcular(numeroA, numeroB, operacao.value)
})

const resultadoFormatado = computed(() => {
  if (resultado.value === null) return '—'

  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 8,
  }).format(resultado.value)
})

const mensagemResultado = computed(() => {
  if (divisaoPorZero.value) return 'Não é possível dividir por zero.'
  if (!numerosValidos.value) return 'Digite os dois números para calcular.'
  return `O resultado da ${operacoes[operacao.value].nome.toLowerCase()} é ${resultadoFormatado.value}.`
})
</script>

<template>
  <main class="pagina">
    <section class="calculadora" aria-labelledby="titulo-calculadora">
      <header class="cabecalho">
        <div class="icone" aria-hidden="true">
          <span>±</span>
        </div>

        <div>
          <p class="etiqueta">Projeto em VueJS</p>
          <h1 id="titulo-calculadora">Calculadora aritmética</h1>
          <p class="descricao">
            Informe os valores e escolha a operação. O resultado é atualizado
            automaticamente.
          </p>
        </div>
      </header>

      <form class="campos" @submit.prevent>
        <label class="campo">
          <span>Primeiro número</span>
          <input
            v-model="primeiroNumero"
            type="number"
            inputmode="decimal"
            step="any"
            placeholder="Ex.: 10"
            aria-describedby="orientacao-calculo"
          />
        </label>

        <label class="campo campo-operacao">
          <span>Operação</span>
          <select v-model="operacao" aria-label="Escolha a operação aritmética">
            <option value="somar">+ Adição</option>
            <option value="subtrair">− Subtração</option>
            <option value="multiplicar">× Multiplicação</option>
            <option value="dividir">÷ Divisão</option>
          </select>
        </label>

        <label class="campo">
          <span>Segundo número</span>
          <input
            v-model="segundoNumero"
            type="number"
            inputmode="decimal"
            step="any"
            placeholder="Ex.: 5"
            aria-describedby="orientacao-calculo"
          />
        </label>
      </form>

      <p id="orientacao-calculo" class="sr-only">
        Não é necessário clicar em um botão. O cálculo acontece ao alterar os
        valores ou a operação.
      </p>

      <section
        class="resultado"
        :class="{ erro: divisaoPorZero }"
        aria-live="polite"
        aria-atomic="true"
      >
        <div>
          <p class="resultado-titulo">
            {{ divisaoPorZero ? 'Atenção' : 'Resultado' }}
          </p>
          <p class="resultado-mensagem">{{ mensagemResultado }}</p>
        </div>

        <output class="resultado-valor">
          {{ divisaoPorZero ? 'Indefinido' : resultadoFormatado }}
        </output>
      </section>

      <footer>
        <span class="status" aria-hidden="true"></span>
        Cálculo automático ativado
      </footer>
    </section>
  </main>
</template>
