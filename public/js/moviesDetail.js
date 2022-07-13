console.log('moviesDetail succes')

const seccion = document.querySelector('section');
const titulo = document.querySelector('h1');
const articulos = document.querySelectorAll('article')
console.log(articulos)
titulo.classList.add('titulo')
seccion.classList.add('fondoCRUD')

for (let index = 0; index < articulos.length; index++) {
    articulos[index].classList.add('fondoTransparente')
    articulos[index].style.width = 'auto'
}

