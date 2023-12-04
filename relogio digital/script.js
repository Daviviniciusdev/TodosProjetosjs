let resultado = document.querySelector('.result');


function relogio(){
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
 

if(h >= 0 && h < 12){
   resultado.innerHTML = 'Bom dia'
}else if(h >= 12 && h < 18 ){
  resultado.innerHTML = 'Boa tarde'
}else if( h >= 18 && h < 23){
    resultado.innerHTML = 'Boa noite'
}
document.querySelector('.horas').innerHTML =  toFixedZero(h) ;
document.querySelector('.minutos').innerHTML = toFixedZero(m);
document.querySelector('.segundos').innerHTML = toFixedZero(s);
}


function toFixedZero(time) {
    return time < 10 ? `0${time}` : time;
}

let timer = setInterval(relogio, 1000);
