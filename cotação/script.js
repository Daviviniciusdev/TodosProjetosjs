const loading = document.querySelector('.custom-loader');

document.querySelector('form').onsubmit = function() {
    showLoad(`${loading.style.display = "block"}`);
    fetch('https://v6.exchangerate-api.com/v6/47fddc6897da8b794f54bb3e/latest/USD')
    .then(Response => Response.json())
    .then(data =>{
    const moeda = document.querySelector('#moedas').value.toUpperCase();
    const taxa = data.conversion_rates[moeda];
    

    if(taxa !== undefined){
        document.querySelector('#resultado').innerHTML = `1 Dolar equivale a  ${taxa.toFixed(2)} ${moeda}`;
    }else{
        document.querySelector('#resultado').innerHTML = ` A moeda que você digitou é invalida, tente novamente`
    }
  
    })
    .catch(Error =>{
    document.querySelector('#resultado').innerHTML = Error;
    })


    return false;

}

function showLoad() {
    loading.innerHTML;
}