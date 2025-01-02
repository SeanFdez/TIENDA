//Constantes

const botonMenu          =document.querySelector(`.Header-svg`)
const menu               =document.querySelector(`.Boton-ul`)

//Funciones
//BOTON MENU
let menuHandler = ()=>{
      menu.classList.toggle(`Activo`)
}

//Listener
botonMenu.addEventListener(`click`, menuHandler)
