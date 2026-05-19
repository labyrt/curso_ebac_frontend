const form = document.querySelector('#form-numeros');
const campoA = document.querySelector('#campo-a');
const campoB = document.querySelector('#campo-b');
const mensagem = document.querySelector('#mensagem');

function validarNumeros(valorA, valorB) {
  return valorB > valorA;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const valorA = Number(campoA.value);
  const valorB = Number(campoB.value);

  if (Number.isNaN(valorA) || Number.isNaN(valorB)) {
    mensagem.textContent = 'Preencha os dois campos com números válidos.';
    mensagem.className = 'mensagem erro';
    return;
  }

  if (validarNumeros(valorA, valorB)) {
    mensagem.textContent = 'Formulário válido: o número B é maior que o número A.';
    mensagem.className = 'mensagem sucesso';
  } else {
    mensagem.textContent = 'Formulário inválido: o número B precisa ser maior que o número A.';
    mensagem.className = 'mensagem erro';
  }
});