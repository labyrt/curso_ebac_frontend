export const operacoes = {
  somar: {
    simbolo: '+',
    nome: 'Adição',
    calcular: (numeroA, numeroB) => numeroA + numeroB,
  },
  subtrair: {
    simbolo: '−',
    nome: 'Subtração',
    calcular: (numeroA, numeroB) => numeroA - numeroB,
  },
  multiplicar: {
    simbolo: '×',
    nome: 'Multiplicação',
    calcular: (numeroA, numeroB) => numeroA * numeroB,
  },
  dividir: {
    simbolo: '÷',
    nome: 'Divisão',
    calcular: (numeroA, numeroB) => numeroA / numeroB,
  },
}

export function calcular(numeroA, numeroB, operacao) {
  if (!operacoes[operacao]) {
    throw new Error('Operação inválida.')
  }

  if (operacao === 'dividir' && numeroB === 0) {
    throw new Error('Não é possível dividir por zero.')
  }

  return operacoes[operacao].calcular(numeroA, numeroB)
}
