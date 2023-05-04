// Document Object Model 

// console.log([document.children[0].lastChild])

//getElement

let titulo = document.getElementById("titulo")

//getElementsByClass

let textos = document.getElementsByClassName("bold")

//getElementsByTagName
let p = document.getElementsByTagName("p")

//querySelector 

// let titul = document.querySelector("#titulo")
let ps = document.querySelectorAll(".bold")

//crear elementos

// let header = document.createElement("header")
// header.className = "color-primary"
// header.textContent = "soy el header"
// console.log(header)

// let body = document.getElementById("body")
// body.appendChild(header)

let article = document.createElement("article")
article.textContent = "soy el texto del artículo"
article.className = "bg-primary text-white"

let section = document.getElementById("contenedor")
contenedor.appendChild(article)

console.log([section])

section.innerHTML += `<article class="bg-primary text-white">
soy el texto del articulo
</article>`

let mentoresJS = [ "Nico", "Fede", "Lucre"]

let lista = document.getElementById("lista")

for (let mentor of mentoresJS){
    lista.innerHTML += `<li>${mentor}</li>`
}

console.log(mentores)

for(let mentor of mentores){
    section.innerHTML += ` <article class="border">
                            <h5>${mentor.nombre}</h5>
                            <p>${mentor.edad}</p>
                            <p>${mentor.modulo}</p>
                            </article>`

    console.log(mentor)
}