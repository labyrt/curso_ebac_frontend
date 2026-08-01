/**
 * Multiplica dois números.
 *
 * @param numero1 - Primeiro fator da multiplicação.
 * @param numero2 - Segundo fator da multiplicação.
 * @returns O produto dos dois números.
 */
function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}

/**
 * Cria uma mensagem de saudação personalizada.
 *
 * @param nome - Nome da pessoa que será saudada.
 * @returns A saudação no formato "Olá nome".
 */
function saudar(nome: string): string {
  return "Olá " + nome;
}

// Exemplos de uso das funções:
console.log(`Resultado da multiplicação: ${multiplicar(6, 7)}`);
console.log(saudar("Lucy"));

export { multiplicar, saudar };
