// Array de objetos com o nome e a nota de cada estudante.
const alunos = [
  { nome: 'Ana', nota: 8.5 },
  { nome: 'Bruno', nota: 5.5 },
  { nome: 'Carla', nota: 7.0 },
  { nome: 'Diego', nota: 4.8 },
  { nome: 'Elisa', nota: 9.2 },
  { nome: 'Felipe', nota: 6.0 },
];

// Retorna um novo array somente com os estudantes que alcançaram a média.
const filtrarAlunosAprovados = (listaDeAlunos) =>
  listaDeAlunos.filter(({ nota }) => nota >= 6);

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log('Todos os alunos:');
console.table(alunos);

console.log('Alunos aprovados (nota maior ou igual a 6):');
console.table(alunosAprovados);

export { alunos, filtrarAlunosAprovados };
