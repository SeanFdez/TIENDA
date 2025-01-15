//Constantes

const botonMenu          =document.querySelector(`.Header-svg`)
const menu               =document.querySelector(`.Boton-ul`)
const acordeon           =document.querySelector(`.Acordeon`)
const pregunta           =acordeon.querySelectorAll(`.Acordeon-h4`)
const respuesta          =acordeon.querySelectorAll(`.Acordeon-p`)     

//Funciones
//BOTON MENU
let menuHandler = ()=>{
      menu.classList.toggle(`Activo`)
}

//ACORDEON
let acordeonHandler = (_,i)=>{
      pregunta[i].addEventListener(`click`, ()=>{ 
            respuesta[i].classList.toggle(`Activo`)
      })
}

//Listener
botonMenu.addEventListener(`click`, menuHandler)
pregunta.forEach(acordeonHandler)