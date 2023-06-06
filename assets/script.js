
let log = new Log(document.querySelector('.log'));

let heroi = new bigWarriors('Davi');
let monstros = new boss('yong')

const stage = new Cenario(
    heroi,
    monstros,
    document.querySelector('#mage'),
    document.querySelector('#monster'),
    log

)

stage.start();