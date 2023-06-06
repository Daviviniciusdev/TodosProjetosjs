let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let digitalElements = document.querySelector('.digital');


function updateClock() {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let second = timeNow.getSeconds();

    digitalElements.innerHTML = `${ toFixedZero(hours)}:${toFixedZero(minutes)}:${toFixedZero(second)}`;

    let sDeg = ((360 / 60) * second) -90;
    let hDeg = ((360 / 12) * hours) -90;
    let mDeg = ((360 / 60) * minutes) -90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    
}




function toFixedZero(time) {
    return time < 10 ?  `0${time}` : time;
}

setInterval(updateClock, 1000);

updateClock();