`use strict`
//Constantes
const filtro      =document.querySelector(`.Filtro-fieldset`)
const checkbox    =document.getElementsByTagName(`input`)
const articulos   =document.querySelectorAll(`.Articulo-wrap`)
const array       = Array.from(checkbox)

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
const boton = document.createElement(`button`)
      boton.classList.add(`Articulo-button`)
      boton.innerText.add(`Añadir a la cesta`)
      producto.appendChild(boton)
// let [fisico, politico, antiguo, espana, europa, mundo] = array

// fisico.addEventListener(`change`, ()=>{
//       if(fisico.checked==true){
//             mapas.forEach((eachMapa) =>{
//                   let nombre=eachMapa.nombre
//                   const coincide = (categorico) => categorico === fisico.id;
//                   let filtrado = eachMapa.categoria.filter(coincide)
//                   if(filtrado){
//                         console.log(nombre)
//                   }


                  
//             })
            

//       }else{

//       }
// })




// array[i].addEventListener(`change`, ()=>{
//             let check = array[i].checked
//             if(check==true){
//                   console.log(arrayId)
//             }else{

//             }
//       })
//  mapas.forEach((_,i)=>{
//       let {categoria}=mapas[i]
//       let {nombre}=mapas[i]
//       categoria.forEach((_,i)=>{
//             console.log(categoria[i])
//             if(categoria[i]=arrayId){
//                   console.log(`holi`)
//             }

//       })
// })

// if(array[i].checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(arrayId)){
//                               articulos[i].style.display=`flex`    
//                          }
                         
//                   })
//             }else{
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(arrayId)){
//                               articulos[i].style.display=`none`    
//                          }
                         
//                   })
//             }
array.forEach((_, i)=>{
      array[i].addEventListener(`change`, ()=>{
            let arrayId = array[i].id
            let check = array[i].checked
            articulos.forEach((_, i)=>{
                  if(articulos[i].classList.contains(arrayId)&&(check==true)){
                        articulos[i].style.display=`flex`
                  }
                  if(articulos[i].classList.contains(arrayId)&&(check==false)){
                        articulos[i].style.display=`none`
                  }   
            })
      })
})
  

// fisico.addEventListener(`click`,()=>{
//             if(fisico.checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(`fisico`)){
//                           articulos[i].style.display=`flex`    
//                         }else{
//                               articulos[i].style.display=`none`
//                   }
//                   })
//             }
//             else{
//                   articulos.forEach((_, i)=>{
//                         articulos[i].style.display=`none`
//                   })
//             }
// })
// politico.addEventListener(`change`,()=>{
//             if(politico.checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(`politico`)){
//                           articulos[i].style.display=`flex`    
//                         }
//                   })
//             }else{
//                   if(articulos[i].classList.contains(`politico`)){
//                         articulos[i].style.display=`none`    
//                       }
//             }
// })
// antiguo.addEventListener(`change`,()=>{
//             if(antiguo.checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(`antiguo`)){
//                           articulos[i].style.display=`flex`    
//                         }else{
//                               articulos[i].style.display=`none`
//                   }
//                   })
//             }else{
//                   articulos.forEach((_, i)=>{
//                         articulos[i].style.display=`none`
//                   })
//             }
// })
// espana.addEventListener(`change`,()=>{
//             if(espana.checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(`espana`)){
//                           articulos[i].style.display=`flex`    
//                         }else{
//                               articulos[i].style.display=`none`
//                   }
//                   })
//             }else{
//                   articulos.forEach((_, i)=>{
//                         articulos[i].style.display=`none`
//                   })
//             }
// })
// europa.addEventListener(`change`,()=>{
//             if(europa.checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(`europa`)){
//                           articulos[i].style.display=`flex`    
//                         }else{
//                               articulos[i].style.display=`none`
//                   }
//                   })
//             }else{
//                   articulos.forEach((_, i)=>{
//                         articulos[i].style.display=`none`
//                   })
//             }
// })
// mundo.addEventListener(`change`,()=>{
//             if(mundo.checked == true){
//                   articulos.forEach((_, i)=>{
//                         if(articulos[i].classList.contains(`mundo`)){
//                           articulos[i].style.display=`flex`    
//                         }else{
//                                     articulos[i].style.display=`none`
//                         }
//                   })
//             }else{
//                   articulos.forEach((_, i)=>{
//                         articulos[i].style.display=`none`
//                   })
//             }
// })


