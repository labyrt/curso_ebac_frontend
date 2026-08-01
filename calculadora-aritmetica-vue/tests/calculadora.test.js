import assert from 'node:assert/strict'
import test from 'node:test'

import { calcular } from '../src/calculadora.js'

test('realiza as quatro operações aritméticas', () => {
  assert.equal(calcular(10, 5, 'somar'), 15)
  assert.equal(calcular(10, 5, 'subtrair'), 5)
  assert.equal(calcular(10, 5, 'multiplicar'), 50)
  assert.equal(calcular(10, 5, 'dividir'), 2)
})

test('aceita números decimais e negativos', () => {
  assert.equal(calcular(-2.5, 4, 'multiplicar'), -10)
  assert.equal(calcular(1.5, 2.5, 'somar'), 4)
})

test('impede divisão por zero', () => {
  assert.throws(
    () => calcular(10, 0, 'dividir'),
    /Não é possível dividir por zero/,
  )
})

test('rejeita uma operação desconhecida', () => {
  assert.throws(() => calcular(10, 5, 'potencia'), /Operação inválida/)
})
