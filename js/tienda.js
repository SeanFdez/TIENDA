`use strict`
//BOTON MENU
const botonMenu =document.querySelector(`.Header-svg`)
const menu  =document.querySelector(`.Boton-ul`)

botonMenu.addEventListener(`click`, ()=>{
    menu.classList.toggle(`Activo`)
})
//ABRIR Y CERRAR CESTA
const boton =document.querySelector(`.Cesta-button`)
const cestaWrap  =document.querySelector(`.Cesta-wrap`)
const cestaCierre =cestaWrap.querySelector(`.Cesta-svg--cerrar`)


boton.addEventListener(`click`, ()=>{
    cestaWrap.classList.toggle(`Activo`)
})
cestaCierre.addEventListener(`click`, ()=>{
    cestaWrap.classList.remove(`Activo`)
})

// CESTA DE LA COMPRA
//Constantes
const zonaWrap    =document.querySelector(`.Zona`)   //Los input tipo checkbox.
const tipoWrap    =document.querySelector(`.Tipo`)   //Los input tipo checkbox.
const checkZona   =zonaWrap.getElementsByTagName(`input`)   //Los input tipo checkbox.
const checkTipo   =tipoWrap.getElementsByTagName(`input`)   //Los input tipo checkbox.
const arrayCheckZona  =Array.from(checkZona)                     //Array creado del elemento anterior.
const arrayCheckTipo  =Array.from(checkTipo)                     //Array creado del elemento anterior.
const cestaUl     =cestaWrap.querySelector(`.Cesta-ul`)      //Cesta-ul, contenedora de los elementos de la cesta.
const fragmento   =document.createDocumentFragment()        //Creamos el fragmento.
const articulo    =document.querySelector(`.Articulo`)      //Contenedora de los articulos.
const cestaCont   =document.querySelector(`.Cesta-items`)   //Contador de los items de la cesta.
const precio      =cestaWrap.querySelector(`.Total-precio`)  //Precio total de la cesta.

//Creamos un array de objetos con todos los articulos que pondremos a la venta con cada uno de sus atributos.
const mapas = [
      {_id:0 , tipo: `politico`,zona: `europa`, imagen: `assets/europapolitico.jpg`, nombre: `Mapa de Europa politico`, descripcion: `Mapa de Europa politico que muestra los diferentes paises.`, precio: 20},
      {_id:1 , tipo: `politico`,zona: `espana`, imagen: `assets/espanapolitico.jpg`, nombre: `Mapa de España politico`, descripcion: `Mapa de España politico que muestra las diferentes comunidades y provincias.`, precio: 10},
      {_id:2 , tipo: `politico`,zona: `mundo`, imagen: `assets/mundipolitico.jpg`, nombre: `Mapamundi politico`, descripcion: `Mapa del mundo politico que muestra los diferentes paises y banderas.`, precio: 30},
      {_id:3 , tipo: `fisico`,zona: `europa`, imagen: `assets/europafisico.jpg`, nombre: `Mapa de Europa fisico`, descripcion: `Mapa de Europa fisico que muestra los diferentes rios y terrenos.`, precio: 20},
      {_id:4 , tipo: `fisico`,zona: `espana`, imagen: `assets/espanafisico.jpg`, nombre: `Mapa de España fisico`, descripcion: `Mapa de España fisico para poder ver los rios y montañas de nuestro territorio.`, precio: 10},
      {_id:5 , tipo: `fisico`,zona: `mundo`, imagen: `assets/mundifisico.jpg`, nombre: `Mapamundi fisico`, descripcion: `Mapamundi fisico que muestra la diversidad de nuestro planeta y sus continentes.`, precio: 30},
      {_id:6 , tipo: `antiguo`,zona: `europa`, imagen: `assets/europaantiguo.jpg`, nombre: `Mapa de Europa antiguo`, descripcion: `Mapa de Europa que muestra como era nuestro continente hace varios siglos.`, precio: 20},
      {_id:7 , tipo: `antiguo`,zona: `espana`, imagen: `assets/espanaantiguo.jpg`, nombre: `Mapa de España antiguo`, descripcion: `Mapa de España antiguo que muestra la peninsula en el siglo XVIII.`, precio: 10},
      {_id:8 , tipo: `antiguo`,zona: `mundo`, imagen: `assets/mundiantiguo.jpg`, nombre: `Mapamundi antiguo`, descripcion: `Mapamundi vintage para observar como ha cambiado la cartografía en los ultimos 5 siglos.`, precio: 30},
]
//Variables

//Creamos la cesta donde irán los articulos.
let cesta = []
let total = 0
let cestaNum = 0


mapas.forEach(mapa => {                                                       //Por cada objeto de Mapas.

      let tipoMapa= mapa.tipo
      let zonaMapa= mapa.zona                                          
      const producto = document.createElement('article')                      //Creamos el Producto como un article.
      producto.classList.add('Articulo-wrap')                                 //Añadimos la clase para modificarlo en css y las categorias.
      producto.classList.add(tipoMapa)                                        
      producto.classList.add(zonaMapa)                                        
      


      const productoImg=document.createElement(`img`)
            productoImg.classList.add(`Articulo-img`)
            productoImg.src=`${mapa.imagen}`
            productoImg.alt=`${mapa.nombre}`
      const productoh3=document.createElement(`h3`)
            productoh3.classList.add(`Articulo-h3`)
            productoh3.innerHTML=`${mapa.nombre}`
      const productoP=document.createElement(`P`)
            productoP.classList.add(`Articulo-p`)
            productoP.innerHTML=`${mapa.descripcion}`
      const productoSpan=document.createElement(`Span`)
            productoSpan.classList.add(`Articulo-span`)
            productoSpan.innerHTML=`${mapa.precio}€`

      producto.appendChild(productoImg)
      producto.appendChild(productoh3)                                             
      producto.appendChild(productoP)
      producto.appendChild(productoSpan)
      //LIGHTBOX ARTICULOS
      const lightboxArticulo  =document.querySelector(`.Lightbox`)
      const cerrarLightbox    =lightboxArticulo.querySelector(`.Lightbox-button`)
      const grande            =lightboxArticulo.querySelector(`.Lightbox-img`)


      productoImg.addEventListener(`click`,()=>{
            lightboxArticulo.classList.add(`Activo`)
            grande.src=productoImg.src
      })

      cerrarLightbox.addEventListener(`click`, ()=>{
      lightboxArticulo.classList.remove(`Activo`)
      })


      arrayCheckZona.forEach((_, i)=>{
            arrayCheckZona[i].addEventListener(`change`, ()=>{                    //Cada vez que el checkbox de zona cambie
                  let arrayZonaId = arrayCheckZona[i].id
                  let check = arrayCheckZona[i].checked
                  if(producto.classList.contains(arrayZonaId)&&(check===true)){   //Comprobamos si los checkboxes activados coinciden con las clases de los productos
                        producto.style.display=`flex`                             //Si coinciden, se muestram
                  }
                  if(producto.classList.contains(arrayZonaId)&&(check===false)){
                        producto.style.display=`none`                             //Si no coinciden, se ocultan
                  }   
            })
      })
      arrayCheckTipo.forEach((_, i)=>{
            arrayCheckTipo[i].addEventListener(`change`, ()=>{                    //Repetimos con el checkbox de tipo
                  let arrayTipoId = arrayCheckTipo[i].id
                  let check = arrayCheckTipo[i].checked
                  if(producto.classList.contains(arrayTipoId)&&(check===true)){   
                        producto.style.display=`flex`                         
                  }
                  if(producto.classList.contains(arrayTipoId)&&(check===false)){
                        producto.style.display=`none`                         
                  }   
            })
      })
      


      const anadirCesta = document.createElement(`button`)                           //Creamos el boton de añadir a la cesta y le damos clase y texto
            anadirCesta.classList.add(`Articulo-button`)
            anadirCesta.textContent = (`Añadir a la cesta`)

            anadirCesta.addEventListener(`click`, ()=>{                              //Cada vez que pulsemos el boton
                  
                  cesta.push(mapa)                                                  //Insertamos un objeto Mapa en la cesta vacia
                  
                  const cestaLi = document.createElement(`li`)                      //Creamos el li y lo insertamos en Cesta-ul
                  cestaLi.classList.add(`Cesta-li`)
                  const cestaName=document.createElement(`span`)
                  cestaName.classList.add(`Cesta-nombre`)
                  cestaName.innerHTML=`${mapa.nombre}`
                  const cestaPrecio=document.createElement(`span`)                  //Hacemos que muestre el nombre y el precio del objeto Mapa introducido
                  cestaPrecio.classList.add(`Cesta-precio`)
                  cestaPrecio.innerHTML=`${mapa.precio}€`
                  cestaLi.appendChild(cestaName)
                  cestaLi.appendChild(cestaPrecio)                                             
                  cestaUl.appendChild(cestaLi)
                  
                  
                  
                  cestaNum++
                  cestaCont.innerHTML=`${cestaNum}`                                 //Hacemos que el contador de la cesta muestre el numero de objetos
                  
                  total+=mapa.precio                 
                  
                   
                  precio.innerHTML = `${total}€` 
                  
                  const borrarCesta = document.createElement(`button`)                   //Creamos el boton de borrar de la cesta 
                        borrarCesta.classList.add(`Cesta-borrar`)                              
                        borrarCesta.textContent = (`Eliminar`)
                        cestaLi.appendChild(borrarCesta)

                        borrarCesta.addEventListener('click', () => {                   //Cada vez que lo pulsamos                        
                              cesta.forEach(eachCesta=>{
                                    if (cestaName.innerHTML===eachCesta.nombre){
                                          cestaLi.remove()                          //Eliminamos el objeto de la cesta
                                    }
                              })
                              cestaNum--
                              cestaCont.innerHTML=`${cestaNum}`         
                              total-=mapa.precio
                              precio.innerHTML = `${total}€`                        //Actualizamos el contador y el precio

                              
                        
                        })
            })

      producto.appendChild(anadirCesta) 
      articulo.appendChild(producto)                                                //Unimos todo
      
})




  