
var N = Number(window.prompt('digite um numero'))

var fatorial = 1;


for (let i = 1; i <= N; i++) {
    fatorial = fatorial * i
}
alert(`fatorial de ${N}: ${fatorial}`)


