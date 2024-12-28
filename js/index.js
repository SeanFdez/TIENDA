//Constantes

const next               = document.querySelector(`.Next`)
const prev               = document.querySelector(`.Prev`)
const carrousel          = document.querySelector(`.Carrousel-slide`)
const articulo           = document.querySelectorAll(`.Articulo`)
const punto              = document.querySelectorAll(`.Carrousel-point`)
const flecha             = document.querySelectorAll(`.Carrousel-arrow`)
const botonMenu          =document.querySelector(`.Header-svg`)
const menu               =document.querySelector(`.Boton-ul`)

botonMenu.addEventListener(`click`, ()=>{
    menu.classList.toggle(`Activo`)
})
//Variables

let art = 0
let anchoImg = 100 / articulo.length

//Funciones
const slide = ()=>{
      carrousel.style.transform = `translateX(-${anchoImg * art}%)`
            punto.forEach((_,i)=>{
                punto[i].classList.remove(`Activo`)
            })
            punto[art].classList.add(`Activo`)
}
const nextHandler = ()=>{
      art++
      if( art >= articulo.length ){
            art = 0
      }
      slide()
}
const prevHandler = ()=>{
      art--
      if(art <= -1){
            art = articulo.length-1
      }
      slide()
}
const puntoHandler = (_, i)=>{
      punto[i].addEventListener(`click`,()=>{
            art=i
            slide()
        })
}


//Listener

next.addEventListener(`click` , nextHandler)

prev.addEventListener(`click`, prevHandler)

punto.forEach(puntoHandler)
