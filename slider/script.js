let slider = document.querySelector('.slider');
let totalSlide = document.querySelectorAll('.slide-item').length;
currentSlide = 0;


function nextPag() {

    currentSlide++
    if (currentSlide > (totalSlide - 1)) {
        currentSlide = 0;
    }
    update();
}

function prevPag() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = totalSlide - 1;
    }
    update();
}

function update() {
    let client = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentSlide * client);
    document.querySelector('.slider').style.marginLeft = `-${newMargin}px`
    console.log(newMargin)
}


setInterval(nextPag, 6000)


