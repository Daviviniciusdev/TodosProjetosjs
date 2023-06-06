

let convidados = ['fulano', 'ciclano', 'bertano', 'a', 'c']
let nome = window.prompt(' qual é o seu nome?')

let pessoas = convidados.find(function (item) {
    if (item == nome) {
        return true;
    } else {
        return false;
    }
})
let res = pessoas;

if (res) {
    document.write(`bem vindo(a) ${nome}`)
} else {
    document.write(`você não foi convidado(a) ${nome}`)
}


/*
let cartao = '5462897745557865';

let pegar = cartao.slice(-4);

let cartaoOculto = pegar.padStart(16, '*');
console.log(` você reconhece este cartao ${cartaoOculto} ?`);
*/