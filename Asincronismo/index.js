//API app programming interface 
//fetch

let lista = document.getElementById("lista")
let personajes

fetch("https://hp-api.onrender.com/api/characters")
.then(response => response.json())
.then(data => {
    // console.log(data)
    personajes = data
    mostrarLista(personajes, lista)
})
.catch(error => console.log(error))

console.log(personajes)

function crearLi(personaje){
    let li = document.createElement("li")
    li.textContent = personaje.name
    console.log(li)
    return li
}

function mostrarLista(personajes, donde){
    
    donde.innerHTML = ""
    let fragment = document.createDocumentFragment()
    for( let personaje of personajes){
        
        fragment.appendChild(crearLi(personaje))
    }
    donde.appendChild(fragment)
}

// mostrarLista(personajes, lista)