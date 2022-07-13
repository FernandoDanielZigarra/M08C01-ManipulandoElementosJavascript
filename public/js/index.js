console.log('Index.js succes')

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);

const subtitulo = qs('h2.subtitulo')
const parrafo = qsa('p')
const main = qs('.container')
const enlace = qs('a')

console.log(enlace)
/* main.style.display = 'block' */

qs('.container').style.display = 'block';

let nombre = prompt('Decime Tu nombre')

/* while (nombre ===''){
    nombre = prompt('Decime Tu nombre')
} */

if (nombre) {
    subtitulo.innerHTML += nombre
} else {
    subtitulo.innerHTML += "invitado"
}

subtitulo.style.textTransform = "uppercase"

enlace.style.color = "#E51B3E"

let respuesta = confirm('desea agregar un fondo de pantalla')

if (respuesta) {
    qs('body').classList.add('fondo')
}

for (let i = 0; i < parrafo.length; i++) {
    if (i % 2 === 0) {
        parrafo[i].classList.add('destacadoPar')
    } else {
        parrafo[i].classList.add('destacadoImpar')
    }
}

qs('.container').style.display = 'block';


console.log(nombre)

