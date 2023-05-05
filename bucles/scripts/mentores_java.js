console.log('mentores JAVA')


const listaJAVA = document.getElementById( 'lista-java' )

function crearLi( mentor ){
    return `<li>${mentor.nombre}</li>`
}

function pintarLista( mentores, elementoDonde ){
    elementoDonde.innerHTML = ""
    let template = ""
    mentores.forEach( mentor => template += crearLi( mentor ) )
    elementoDonde.innerHTML = template
}

const mentoresConNombre = mentores.filter( mentor => mentor.nombre && mentor.modulo === 'JAVA' )
pintarLista( mentoresConNombre, listaJAVA )