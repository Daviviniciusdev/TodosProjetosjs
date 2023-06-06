function relogio(){
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
 
document.querySelector('.horas').innerHTML =  toFixedZero(h) ;
document.querySelector('.minutos').innerHTML = toFixedZero(m);
document.querySelector('.segundos').innerHTML = toFixedZero(s);
}


function toFixedZero(time) {
    return time < 10 ? `0${time}` : time;
}

let timer = setInterval(relogio, 1000);
