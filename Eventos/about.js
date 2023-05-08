let seccion = document.getElementById("section")
let lista = document.getElementById("lista")

function armarArticulo(objeto){
   return `<article class="border p-3 d-flex flex-column align-items-center justify-content-evenly">
            <h5>${objeto.nombre}</h5>
            <img src=${objeto.imagen} alt="imagen" class="img-fluid border rounded-circle" id="imagen">
            <div class="d-flex justify-content-evenly col-12">
                <p>Edad: ${objeto.edad}</p>
                <p>Módulo: ${objeto.modulo}</p>
            </div>
        </article>`
}

function imprimirArticulos(lista, donde){
    donde.innerHTML = ""
    let template = ""
    for(let elemento of lista){
        template += armarArticulo(elemento)
    }
    donde.innerHTML += template
}

imprimirArticulos(mentores, seccion)


function crearLi(array, donde){
    let fragment = document.createDocumentFragment()
    for(let elemento of array){
        let li = document.createElement("li")
        li.textContent = elemento.nombre     
        fragment.appendChild(li)
    }
    donde.appendChild(fragment)
}

// crearLi(mentores, lista)

let radioButtons = document.querySelectorAll("input[type='radio']")
console.log(radioButtons)

radioButtons.forEach(radio => radio.addEventListener("change", handleChange))

function handleChange(e){
    console.log(e.target.value)
    console.log(filtrarPorModulo(mentores, e.target.value))
    imprimirArticulos(filtrarPorModulo(mentores, e.target.value), seccion)
}

function filtrarPorModulo(array, moduloSeleccionado){
    if(moduloSeleccionado == "todos"){
        return array
    }
    let aux = array.filter(mentor => mentor.modulo.toLowerCase() == moduloSeleccionado.toLowerCase())
   return aux
}