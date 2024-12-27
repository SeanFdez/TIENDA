`use strict`
//Constantes
const checkbox    =document.getElementsByTagName(`input`)   //Los input tipo checkbox.
const arrayCheck  =Array.from(checkbox)                     //Array creado del elemento anterior.
const cestaUl     =document.querySelector(`.Cesta-ul`)      //Cesta-ul, contenedora de los elementos de la cesta.
const fragmento   =document.createDocumentFragment()        //Creamos el fragmento.
const articulo    =document.querySelector(`.Articulo`)      //Contenedora de los articulos.
const cestaCont   =document.querySelector(`.Cesta-items`)   //Contador de los items de la cesta.
const precio      =document.querySelector(`.Total-precio`)  //Precio total de la cesta.

//Creamos un array de objetos con todos los articulos que pondremos a la venta con cada uno de sus atributos.
const mapas = [
      {_id:0 , categoria:[`politico`, `europa`], imagen: `assets/europapolitico.jpg`, nombre: `Mapa de Europa politico`, descripcion: `Mapa de Europa politico que muestra los diferentes paises.`, precio: 20},
      {_id:1 , categoria:[`politico`, `espana`], imagen: `assets/espanapolitico.jpg`, nombre: `Mapa de España politico`, descripcion: `Mapa de España politico que muestra las diferentes comunidades y provincias.`, precio: 10},
      {_id:2 , categoria:[`politico`, `mundo`], imagen: `assets/mundipolitico.jpg`, nombre: `Mapamundi politico`, descripcion: `Mapa del mundo politico que muestra los diferentes paises y banderas.`, precio: 30},
      {_id:3 , categoria:[`fisico`, `europa`], imagen: `assets/europafisico.jpg`, nombre: `Mapa de Europa fisico`, descripcion: `Mapa de Europa fisico que muestra los diferentes rios y terrenos.`, precio: 20},
      {_id:4 , categoria:[`fisico`, `espana`], imagen: `assets/espanafisico.jpg`, nombre: `Mapa de España fisico`, descripcion: `Mapa de España fisico para poder ver los rios y montañas de nuestro territorio.`, precio: 10},
      {_id:5 , categoria:[`fisico`, `mundo`], imagen: `assets/mundifisico.jpg`, nombre: `Mapamundi fisico`, descripcion: `Mapamundi fisico que muestra la diversidad de nuestro planeta y sus continentes.`, precio: 30},
      {_id:6 , categoria:[`antiguo`, `europa`], imagen: `assets/europaantiguo.jpg`, nombre: `Mapa de Europa antiguo`, descripcion: `Mapa de Europa que muestra como era nuestro continente hace varios siglos.`, precio: 20},
      {_id:7 , categoria:[`antiguo`, `espana`], imagen: `assets/espanaantiguo.jpg`, nombre: `Mapa de España antiguo`, descripcion: `Mapa de España antiguo que muestra la peninsula en el siglo XVIII.`, precio: 10},
      {_id:8 , categoria:[`antiguo`, `mundo`], imagen: `assets/mundiantiguo.jpg`, nombre: `Mapamundi antiguo`, descripcion: `Mapamundi vintage para observar como ha cambiado la cartografía en los ultimos 5 siglos.`, precio: 30},
]
//Variables

//Creamos la cesta donde irán los articulos.
let cesta = []

mapas.forEach(mapa => {                                                       //Por cada objeto de Mapas.

      let categoria = mapa.categoria                                          //Seleccionamos las categorias.
      const producto = document.createElement('article')                      //Creamos el Producto como un article.
      producto.classList.add('Articulo-wrap')                                 //Añadimos la clase para modificarlo en css.
      categoria.forEach((eachCategoria)=>{                              
            producto.classList.add(eachCategoria)                             //Añadimos las categorias como clases al Producto.
      })

      producto.innerHTML = 
      `<img src="${mapa.imagen}" alt="${mapa.nombre}" class="Articulo-img">
      <h3 class="Articulo-h3">${mapa.nombre}</h3>                             
      <p class="Articulo-p">${mapa.descripcion}</p>
      <span class="Articulo-span">${mapa.precio}€</span>`                    //Dentro del HTML de cada producto añadimos la imagen, el nombre, la descripcion y el precio.


      arrayCheck.forEach((_, i)=>{
            arrayCheck[i].addEventListener(`change`, ()=>{                         //Cada vez que el checkbox cambie
                  let arrayId = arrayCheck[i].id
                  let check = arrayCheck[i].checked
                  if(producto.classList.contains(arrayId)&&(check===true)){   //Comprobamos si los checkboxes activados coinciden con las clases de los productos
                        producto.style.display=`flex`                         //Si coinciden, se muestram
                  }
                  if(producto.classList.contains(arrayId)&&(check===false)){
                        producto.style.display=`none`                         //Si no coinciden, se ocultan
                  }   
            })
      })



      const botonCesta = document.createElement(`button`)                           //Creamos el boton de añadir a la cesta y le damos clase y texto
            botonCesta.classList.add(`Articulo-button`)
            botonCesta.textContent = (`Añadir a la cesta`)
            botonCesta.addEventListener(`click`, ()=>{                              //Cada vez que pulsemos el boton
                  
                  cesta.push(mapa)                                                  //Insertamos un objeto Mapa en la cesta vacia
                  
                  const cestaLi = document.createElement(`li`)                      //Creamos el li y lo insertamos en Cesta-ul
                  cestaLi.classList.add(`Cesta-li`)
                  cestaLi.innerHTML = 
                  `<span class="Cesta-nombre">${mapa.nombre}</span>           
                  <span class="Cesta-precio">${mapa.precio}€</span>`                //Hacemos que muestre el nombre y el precio del objeto Mapa introducido
                  cestaUl.appendChild(cestaLi)


                  cestaCont.innerHTML=cesta.length                                  //Hacemos que el contador de la cesta muestre el numero de objetos
                 
                  let total=0
                  for (let i = 0; i < cesta.length; i++) {
                        total += cesta[i].precio;                                   // Sumamos el precio de cada producto en la cesta
                  }
                  precio.innerHTML = `${total}€` 
                  
                  const borrar = document.createElement(`button`)                   //Creamos el boton de borrar de la cesta 
                        borrar.classList.add(`Cesta-borrar`)                              
                        borrar.textContent = (`Eliminar`)
                        cestaLi.appendChild(borrar)
                        console.log(cesta)

                        borrar.addEventListener('click', (e) => {
                              cesta.forEach((eachCesta, i)=>{
                                    if (eachCesta === mapa) {
                                          cesta.splice(i, 1)
                                          cestaCont.innerHTML=cesta.length
                                    }
                                    precio.innerHTML = `${total}€`
                              })
                              borrar.parentElement.remove()
                              if (cestaCont.innerHTML >= 5) {
                                    cestaUl.firstChild.remove()
                                    cestaCont.innerHTML=5
                                    precio.innerHTML = `${total}€`
                              }
                        })

                        
                  })

      producto.appendChild(botonCesta) 
      articulo.appendChild(producto)
})

// articulos.forEach((eachArticulo)=>{
//       const articuloTitulo=eachArticulo.querySelector(`.Articulo-h3`)
//       const boton         =eachArticulo.querySelector(`.Articulo-button`)
//       const precio        =eachArticulo.querySelector(`.Articulo-span`)


//       boton.addEventListener(`click`, ()=>{
//             cesta.push(articuloTitulo.innerHTML, precio.innerHTML)
//             console.log(cesta)
//       })
// })



  