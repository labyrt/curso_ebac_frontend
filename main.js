import { alunos, filtrarAlunosAprovados } from './index.js';

const scoreInput = document.querySelector('#minimum-score');
const scoreValue = document.querySelector('#score-value');
const studentsList = document.querySelector('#students-list');
const approvedCount = document.querySelector('#approved-count');
const totalCount = document.querySelector('#total-count');
const highestScore = document.querySelector('#highest-score');
const resultLabel = document.querySelector('#result-label');
const emptyState = document.querySelector('#empty-state');
const formatScore = (score) => score.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const renderStudents = () => {
  const minimumScore = Number(scoreInput.value);
  const approvedStudents = filtrarAlunosAprovados(alunos, minimumScore);
  scoreValue.textContent = formatScore(minimumScore);
  totalCount.textContent = String(alunos.length);
  approvedCount.textContent = String(approvedStudents.length);
  highestScore.textContent = formatScore(Math.max(...alunos.map(({ nota }) => nota)));
  resultLabel.textContent = `${approvedStudents.length} ${approvedStudents.length === 1 ? 'resultado' : 'resultados'}`;
  emptyState.hidden = approvedStudents.length !== 0;
  studentsList.innerHTML = approvedStudents.map(({ nome, nota }) => `<tr><td><span class="avatar">${nome[0]}</span><strong>${nome}</strong></td><td><span class="grade">${formatScore(nota)}</span></td><td><span class="approved">Aprovado</span></td></tr>`).join('');
};

scoreInput.addEventListener('input', renderStudents);
renderStudents();
