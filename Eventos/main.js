const container = document.getElementById("container")

container.addEventListener("click", (e)=>{
    if(e.target.classList.contains("cuadrado")){
        e.target.classList.toggle("circulo")
    }
    console.log([e.target])

    // if(e.target.classList.contains("cuadrado")){
    //    if(!e.target.classList.contains("circulo")){

    //        e.target.classList.add("circulo")
    //    } else {
    //     e.target.classList.remove("circulo")
    //    }
    // }
})

// let formulario = document.getElementById("formulario")
// let nombres = []

// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     console.log(e.target[0].value)
//     nombres.push(e.target[0].value)
//     console.log(nombres)
//     crearLi(nombres, lista)
// })

// let lista = document.getElementById("lista")

// //maqueta de la lista
// function crearLi(array, donde){
//     donde.innerHTML = ""
//     let fragment = document.createDocumentFragment()
//     for(let elemento of array){
//         let li = document.createElement("li")
//         li.textContent = elemento
//         fragment.appendChild(li)
//     }
//     donde.appendChild(fragment)
// }
//fn para el armado de la lista
//array vacío para que almacene los datos

//fn para que te muestre la lista

