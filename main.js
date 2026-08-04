const multiplicar = (numero1, numero2) => numero1 * numero2;
const saudar = (nome) => `Olá ${nome}`;

const multiplicationForm = document.querySelector("#multiplication-form");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const multiplicationResult = document.querySelector("#multiplication-result");
const greetingForm = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#name");
const greetingResult = document.querySelector("#greeting-result");

const formatNumber = (value) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 4 }).format(value);

const updateMultiplication = () => {
  const first = Number(firstNumber.value);
  const second = Number(secondNumber.value);

  if (firstNumber.value.trim() === "" || secondNumber.value.trim() === "" || !Number.isFinite(first) || !Number.isFinite(second)) {
    multiplicationResult.textContent = "Preencha os dois números.";
    return;
  }

  multiplicationResult.innerHTML =
    `${formatNumber(first)} × ${formatNumber(second)} = <strong>${formatNumber(multiplicar(first, second))}</strong>`;
};

const updateGreeting = () => {
  const name = nameInput.value.trim();
  greetingResult.textContent = name ? saudar(name) : "Digite um nome para continuar.";
};

multiplicationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateMultiplication();
});

greetingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateGreeting();
});

firstNumber.addEventListener("input", updateMultiplication);
secondNumber.addEventListener("input", updateMultiplication);
nameInput.addEventListener("input", updateGreeting);
