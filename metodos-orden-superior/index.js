// Que es una funcion de orden superior
// Es una funcion que puede recibir otra funcion en sus parametros o puede retornar una funcion

const calculadora = function( operacion, numUno, numDos ){
    console.log(" log operacion:",operacion)
    const resultado = operacion( numUno, numDos )
    return resultado
}

function dividir(a,b) {
    return a/b
}

                 
const multiplicar = ( a,b ) => a*b


/* const resultadoSuma = calculadora( function(a,b) {
    return a+b
 } , 20, 20 )
console.log( resultadoSuma )
const resultadoResta = calculadora( (a,b) => a - b , 15, 3 )
console.log(resultadoResta)

const producto = calculadora( multiplicar, 10, 5 )
console.log(producto);

const division = calculadora( dividir, 15, 3 )
console.log(division);
 */

// Metodos de array
console.log( mentores )


// Recorrer el array y por cada elemento, ejecutar la funcion que le pase
// la funcion que le paso se la llama ( callback )
// a la callback le pasa como argumento, el elemento actual, indice de ese elemento en el array, y el array que esta recorriendo

/* mentores.forEach( fn )  */

const forEach = (mentores, fn) => {
    for( let i = 0; i < mentores.length; i++ ){
        fn( mentores[i], i, mentores )
    }
}
const map = (mentores, fn) => {
    let aux = []
    for( let i = 0; i < mentores.length; i++ ){
        const returnDeLaFuncion = fn( mentores[i], i, mentores )
        aux.push( returnDeLaFuncion )
    }
    return aux
   
}
const filter = (mentores, fn) => {
    let returnDelFilter = []
    for( let i = 0; i < mentores.length; i++ ){
        const returnDeLaFuncion = fn( mentores[i], i, mentores )
        if( returnDeLaFuncion ){
            returnDelFilter.push( mentores[i] )
        }
    }
    return returnDelFilter  
}
const find = (mentores, fn) => {

    for( let i = 0; i < mentores.length; i++ ){
        const returnDeLaFuncion = fn( mentores[i], i, mentores )
        if( returnDeLaFuncion ){
            return mentores[i] 
        }
    }
 
}

const fn = function( mentor, indice ){
    console.log(indice)
} 
const fnMap = ( mentor, indice ) => {
    return `${mentor.nombre} tiene ${mentor.edad} años`
}

/*
    forEach( mentores, fn )

    const resultadoMap = map( mentores, fnMap )
    console.log( resultadoMap )
    console.log( filter( mentores, mentor => mentor.edad >= 28  ) )
*/

mentores.forEach( fn ) 
const resultadoMetodoMap = mentores.map( fnMap  )

const mentoresMayoresA27 = mentores.filter( mentor => mentor.edad > 27  )

const primerMentorMayorA27 = mentores.find( mentor => mentor.edad > 27  )

const todosSonMayoresA27 = mentores.every( mentor => mentor.edad > 27 )
const todosTienenNombre = mentores.every( mentor => mentor.nombre )

const algunoEsMayorA50 = mentores.some( mentor => mentor.edad > 50 )
const algunoEsMayorA30 = mentores.some( mentor => mentor.edad > 30 )

const nombresMentores = mentores.map( mentor => mentor.nombre )
                                .filter( nombre => nombre )

const fnSort =  (a,b) => {
    if( a.tecnologias.length > b.tecnologias.length  ){
        return 1
    }
    if( a.tecnologias.length  < b.tecnologias.length  ){
        return -1
    }
    return 0
} 
const mentoresOrdenadosPorEdad = mentores.map( mentor => mentor ).sort( fnSort )                          

console.log( nombresMentores )


console.log(mentoresOrdenadosPorEdad)
