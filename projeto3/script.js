const loading = document.querySelector('.custom-loader');


document.querySelector('.busca').addEventListener('submit', async (event) =>{
    clearInfo();
    event.preventDefault();


    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        showWarning(`${loading.style.display = "block"}`);

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=eecdb7e9a3309e54fb9dc6abbb34bb42&units=metric&lang=pt_br`
        let results = await fetch(url)
        let json = await results.json();
        console.log(json)

        if(json.cod === 200){
           showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
                description: json.weather[0].description,
                humidity: json.main.humidity,
                pressure: json.main.pressure,
                visibility: json.visibility,
                
           })
           clearLoading();
        }else{
            clearInfo();
            document.querySelector('.aviso').innerHTML = 'Não encontramos o local indicado...'
        }
    }
})

function showInfo(json) {
    showWarning('');
    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp.toFixed(0)} <sup>ºC</sup>`
    document.querySelector('.temp img').setAttribute('src',  `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
    document.querySelector('.description').innerHTML = json.description;
    document.querySelector('.humidity').innerHTML = ` umidade ${json.humidity}`;
    document.querySelector('.pressure').innerHTML = ` pressure ${json.pressure}`
    document.querySelector('.visibility').innerHTML = `visibility ${json.visibility}`
}


function showWarning() {
   loading.innerHTML;
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

function clearLoading() {
    loading.style.display = "none"
}
