function setNum(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.querySelector('#resultado').innerHTML = '';
}

function back() {
    let display = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = display.substring(0, display.length -1);
}

function result() {
   let resultado = document.querySelector('#resultado').innerHTML;
   if(resultado) {
    document.querySelector('#resultado').innerHTML = eval(resultado);
   }
}