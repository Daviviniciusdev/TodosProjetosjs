

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })
}

function decidirBotao() {
    if (window.scrollY === 0) {
        document.querySelector('.scrollButton').style.display = 'none'
    } else {
        document.querySelector('.scrollButton').style.display = 'block'
    }
}


window.addEventListener('scroll', decidirBotao)