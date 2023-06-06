function mostrar() {


    let imagem = document.getElementById('arquivo').files[0];

    let img = document.createElement('img')
    img.src = URL.createObjectURL(imagem);
    img.style.width = '250px'
    document.querySelector('.carregar').appendChild(img);

}