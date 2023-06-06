
document.querySelector('#button').addEventListener('click', ()=>{
let display = document.querySelector('.area-blocos ul');
let receber = document.querySelector('#data');
    const newLi = document.createElement('li');
    newLi.innerHTML = receber.value;
    display.appendChild(newLi);
    receber.value = '';
       
})