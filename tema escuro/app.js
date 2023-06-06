function mudar() {

    let color = document.getElementById('color');
    let adicionar = document.querySelector('.tema_escuro');
    let img = document.querySelector('#imagens');

    //mudar tema
    if (adicionar.classList.contains('escuro')) {
        adicionar.classList.remove('escuro');


    } else {
        adicionar.classList.add('escuro');

    }
    //mudar imagem on/off
    if (adicionar.classList.contains('escuro')) {
        img.src = "imagens/toggle on.png"
        color.style.background = 'black'
        img.style.background = 'white'
        console.log('mudou a imagem para on')
    } else {
        img.src = "imagens/toggle off.png"
        color.style.background = 'white'
        console.log('mudou a imagem para off')
    }
}




