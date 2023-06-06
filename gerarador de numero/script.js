
alert('adivinhe o número que estou pensando')
let escolha = window.prompt('escolha um número de 0 a 10 em seguida clique em gerar número')
document.write(` numero escolhido foi: ${escolha}`)


function gerar() {

    var numero = document.querySelector('.result');
    numero.innerHTML = Math.floor(10 * Math.random() + 1);
    if (numero.innerHTML == escolha) {
        alert('parabéns você acertou ')
    } else {
        alert('você  errou, o  número que eu  pensei foi: ' + numero.innerHTML);

    }
    Refresh();

}
function Refresh() {
    window.location.reload();
}

