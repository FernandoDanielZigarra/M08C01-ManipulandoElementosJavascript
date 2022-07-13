console.log('moviesList success')


const body = document.querySelector('body');
const titulo = document.querySelector('.moviesListTitulo');
const links = document.querySelectorAll('ul li a')
console.log(links)
let respuest = confirm('Desea aplicar modo oscuro');


if(respuest){
    for (let index = 0; index < links.length; index++) {
        links[index].style.color = "white"
    }
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add('fondoMoviesList')
}




titulo.innerHTML = 'LISTADO DE PELÍCULAS';
titulo.style.color = "white";
titulo.style.backgroundColor = "teal";
titulo.style.padding = "20px"
