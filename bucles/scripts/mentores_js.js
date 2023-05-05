console.log('mentores JS')

const listaJS = document.getElementById( 'lista-js' )

function crearLi( mentor ){
    return `<li>${mentor.nombre}</li>`
}

function pintarLista( mentores, elementoDonde ){
    elementoDonde.innerHTML = ""
    let template = ""
    mentores.forEach( mentor => template += crearLi( mentor ) )
    elementoDonde.innerHTML = template
}

const mentoresConNombre = mentores.filter( mentor => mentor.nombre && mentor.modulo === 'JS' )
pintarLista( mentoresConNombre, listaJS )