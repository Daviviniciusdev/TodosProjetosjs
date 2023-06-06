
let nome = window.prompt('Qual é o seu nome?')


let dinheiro = document.getElementById('dinheiro')
let horas = document.getElementById('horas')
let resultado = document.getElementById('resultado')
let dias = document.getElementById('dias')



function calcular() {
    let num1 = dias.value * horas.value;
    let num2 = (dinheiro.value, num1);
    let total = dinheiro.value / num1;


    resultado.innerHTML = nome + ', você ganha por hora: R$' + total.toFixed(2) + ' Reais';
}

