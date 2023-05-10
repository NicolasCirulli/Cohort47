const checkbox = document.getElementById('contenedor-checkbox')
const contenedorMentores = document.getElementById('contenedor-mentores')

const modulos = mentores.map(mentor => mentor.modulo)
const setModulos = new Set(modulos)
const arrayModulos = Array.from(setModulos)
console.log(arrayModulos)

const funcionReduce = (acumulador, elementoActual, indice, array) => {
    return acumulador += `<div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="${elementoActual}-${indice}" value="${elementoActual}">
                            <label class="form-check-label" for="${elementoActual}-${indice}">${elementoActual}</label>
                        </div>`
}

const templateCheckbox = arrayModulos.reduce(funcionReduce, '')
checkbox.innerHTML = templateCheckbox;

function crearTemplate( lista ) {
    return lista.reduce( ( acc, act ) => {
        console.log(act.modulo)
        return acc +=  `<div class="d-flex flex-column card text-white border-primary col-3">
        <img class="card-img-top h-75"
            src="${act.imagen}"
            alt="Title">
        <div class="card-body flex-grow-1">
            <h4 class="card-title text-primary">${act.nombre}</h4>
            <p class="card-text text-primary">${act.modulo}</p>
            <a href="./details.html?nombre=${act.nombre}">detalle</a>
        </div>
    </div>`
    }, '' )
}

contenedorMentores.innerHTML = crearTemplate( mentores )

checkbox.addEventListener( 'change', () => {
    const checkboxChecked = Array.from( document.querySelectorAll( 'input[type="checkbox"]:checked' ) ).map( check => check.value )
    const mentoresFiltrados = filtrarMentores( mentores, checkboxChecked )
    contenedorMentores.innerHTML = crearTemplate(mentoresFiltrados)
} )


function filtrarMentores( mentores, tecnologias ) {
    if( tecnologias.length == 0 ) return mentores
    return mentores.filter( mentor => tecnologias.includes( mentor.modulo ) )
}
