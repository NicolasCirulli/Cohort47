const contenedor = document.getElementById( 'contenedor-details' )


console.log( location )
const params = new URLSearchParams( location.search )

const nombreParam = params.get('nombre')

console.log( nombreParam )



const mentor = mentores.find( mentor => mentor.nombre == nombreParam )

document.title = `Detalle de ${mentor.nombre}`

const tecnologias = mentor.tecnologias.reduce( (acc, act) => {
    return acc += `<li class="text-primary" > ${act} </li>`
},'' )

console.log(tecnologias)

contenedor.innerHTML = `<div class="d-flex flex-column card text-white border-primary col-3">
                        <img class="card-img-top h-75"
                            src="${mentor.imagen}"
                            alt="Title">
                        <div class="card-body flex-grow-1">
                            <h4 class="card-title text-primary">${mentor.nombre}</h4>
                            <p class="card-text text-primary">${mentor.modulo}</p>
                            <ul> ${tecnologias} </ul>
                        </div>
                        </div>`