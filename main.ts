import './styles.css';
import { multiplicar, saudar } from './index';

const multiplicationForm = document.querySelector<HTMLFormElement>('#multiplication-form');
const firstNumber = document.querySelector<HTMLInputElement>('#first-number');
const secondNumber = document.querySelector<HTMLInputElement>('#second-number');
const multiplicationResult = document.querySelector<HTMLOutputElement>('#multiplication-result');
const greetingForm = document.querySelector<HTMLFormElement>('#greeting-form');
const nameInput = document.querySelector<HTMLInputElement>('#name');
const greetingResult = document.querySelector<HTMLOutputElement>('#greeting-result');

if (!multiplicationForm || !firstNumber || !secondNumber || !multiplicationResult || !greetingForm || !nameInput || !greetingResult) {
  throw new Error('Não foi possível inicializar a interface.');
}

const formatNumber = (value: number): string => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(value);

const updateMultiplication = (): void => {
  const first = Number(firstNumber.value);
  const second = Number(secondNumber.value);
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    multiplicationResult.textContent = 'Preencha os dois números.';
    return;
  }
  multiplicationResult.innerHTML = `${formatNumber(first)} × ${formatNumber(second)} = <strong>${formatNumber(multiplicar(first, second))}</strong>`;
};

const updateGreeting = (): void => {
  const name = nameInput.value.trim();
  greetingResult.textContent = name ? saudar(name) : 'Digite um nome para continuar.';
};

multiplicationForm.addEventListener('submit', (event) => { event.preventDefault(); updateMultiplication(); });
greetingForm.addEventListener('submit', (event) => { event.preventDefault(); updateGreeting(); });
firstNumber.addEventListener('input', updateMultiplication);
secondNumber.addEventListener('input', updateMultiplication);
nameInput.addEventListener('input', updateGreeting);
