const display = document.querySelector('.display ul');

var n1 = parseInt(prompt("Digite o primeiro número:"));
var n2 = parseInt(prompt("Digite o segundo número:"));
var n3 = parseInt(prompt("Digite o terceiro número:"));
var n4 = parseInt(prompt("Digite o quarto número:"));
var n5 = parseInt(prompt("Digite o quinto número:"));

const  numeros = [n1, n2, n3, n4, n5];

for (let numero of numeros) {
const  frase = ` Numero : ${numero}`;
let frase_adicionada = 0;

  if (frase_adicionada < 5) {
    let newLi = document.createElement('li');
    newLi.innerHTML = frase;
    display.appendChild(newLi);
    frase_adicionada++;
  }
  for (let i = numero + 1; i < numero + 6; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `${numero} X ${i} = ${numero * i}`;
    display.appendChild(newLi);
  }


}