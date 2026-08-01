import assert from 'node:assert/strict';
import { alunos, filtrarAlunosAprovados } from './index.js';

const aprovados = filtrarAlunosAprovados(alunos);

assert.equal(alunos.length, 6);
assert.equal(aprovados.length, 4);
assert.deepEqual(
  aprovados.map(({ nome }) => nome),
  ['Ana', 'Carla', 'Elisa', 'Felipe'],
);
assert.ok(aprovados.every(({ nota }) => nota >= 6));

console.log('Todos os testes passaram!');
