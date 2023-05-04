let seccion = document.getElementById("section")

function armarArticulo(objeto){
   return `<article class="border p-3 d-flex flex-column align-items-center justify-content-evenly">
            <h5>${objeto.nombre}</h5>
            <img src=${objeto.imagen} alt="imagen" class="img-fluid border rounded-circle" id="imagen">
            <p class="">${objeto.tecnologias}</p>
            <div class="d-flex justify-content-evenly col-12">
                <p>${objeto.edad}</p>
                <p>${objeto.modulo}</p>
            </div>
        </article>`
}

function imprimirArticulos(lista, donde){
    let template = ""
    for(let elemento of lista){
        template += armarArticulo(elemento)
    }
    console.log(template)
    donde.innerHTML += template
}

imprimirArticulos(mentores, seccion)

let lista = document.getElementById("lista")

function crearLi(array, donde){
    let fragment = document.createDocumentFragment()
    for(let elemento of array){
        let li = document.createElement("li")
        li.textContent = elemento.nombre     
        fragment.appendChild(li)
    }
    donde.appendChild(fragment)
}

crearLi(mentores, lista)