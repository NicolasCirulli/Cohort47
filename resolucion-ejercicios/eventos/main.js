const formulario = document.getElementById('formulario-js')
const inputTitulo = document.getElementById('titulo-nueva-nota')
const textArea = document.getElementById('descripcion-nueva-nota')
const btnBorrarForm = document.querySelector('#formulario-js input[value="borrar"]')
const contenedorNotas = document.getElementById( 'container-notas' )
const inputBusqueda = document.getElementById( 'busqueda' )
const checkbox = document.getElementById( 'realizadas' )
let notas = [
    {
        titulo: 'Ir a comprar',
        descripcion: 'Comida',
        realizada: false,
        id : 0
    },
    {
        titulo: 'Darle de comer al gato',
        descripcion: 'Comida',
        realizada: false,
        id : 1
    },
    {
        titulo: 'Ir a jugar al futbol',
        descripcion: 'Comida',
        realizada: false,
        id : 2
    },
]
let idNotas = 3

pintarArticles( notas, contenedorNotas )

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputTitulo.value && textArea.value) {
        let nota = {
            titulo: inputTitulo.value,
            descripcion: textArea.value,
            realizada: false,
            id : idNotas
        }
        idNotas++
        reiniciarForm(inputTitulo, textArea)
        notas.push(nota)
        pintarArticles( notas, contenedorNotas )
    } else {
        alert('Todos los campos son obligatorios')
    }
    console.log(notas)

})

btnBorrarForm.addEventListener('click', () => {
    reiniciarForm(inputTitulo, textArea)
})

contenedorNotas.addEventListener( 'click', (e) => {
    let dataSet = e.target.dataset
    console.log([ e.target] ) 
    if(dataSet.accion == "borrar"){
        // aca borro la nota
        notas = notas.filter( nota => nota.id != dataSet.id )

        /* let aux = []

        for( let nota of notas ){
            if( nota.id != dataSet.id ){
                aux.push( nota )
            }
        }
        notas = aux
 */
        pintarArticles( notas, contenedorNotas )
    }
    if(dataSet.accion == "estado"){
        // aca cambio el estado de la nota
        const nota = notas.find( nota => nota.id == dataSet.id )
        nota.realizada = !nota.realizada
    }
} )

// evento al input de busqueda
inputBusqueda.addEventListener( 'input', () => {
    const filtrarPorBusqueda = filtrarPorTitulo( notas, inputBusqueda.value )
    if( checkbox.checked ){
        const filtradoPorRealizadas = filtrarPorRealizadas( filtrarPorBusqueda )
        pintarArticles( filtradoPorRealizadas, contenedorNotas )
    }else{
        pintarArticles( filtrarPorBusqueda, contenedorNotas )
    }
})

// evento al checkbox
checkbox.addEventListener( 'change', () => {
    const filtrarPorBusqueda = filtrarPorTitulo( notas, inputBusqueda.value )
    if( checkbox.checked ){
        const filtradoPorRealizadas = filtrarPorRealizadas( filtrarPorBusqueda )
        pintarArticles( filtradoPorRealizadas, contenedorNotas )
    }else{
        pintarArticles( filtrarPorBusqueda, contenedorNotas )
    }
})

// funcion para filtrar por realizadas
function filtrarPorRealizadas( notas ) {
    return notas.filter( nota => nota.realizada )
}
// funcion para filtrar por titulo
function filtrarPorTitulo( notas, busqueda ) {
    return notas.filter( nota => nota.titulo.toLowerCase().includes( busqueda.toLowerCase() ) )
}

function reiniciarForm(input, text) {
    input.value = ""
    text.value = ""
}

function pintarArticles( notas, contenedor ){
    let template = ""
    for( let nota of notas){
        template += crearArticle( nota ) 
    }
    contenedor.innerHTML = template
}

function crearArticle(nota) {
    let estado = ''
    if( nota.realizada ){
        estado = 'checked'
    }
    return `<article class="card col-3">
                <header class="card-header">
                    <div class="form-check">
                        <input class="form-check-input" data-accion="estado" data-id="${nota.id}" type="checkbox" ${estado} value="" id="">
                        ${nota.titulo}
                    </div>
                </header>
                <main class="card-body"> <p> ${nota.descripcion} </p> </main>
                <footer class="card-footer d-flex justify-content-center">
                    <button class="btn btn-danger" data-accion="borrar" data-id="${nota.id}">Borrar nota</button>
                </footer>
            </article>
`
}