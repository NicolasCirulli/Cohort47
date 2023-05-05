// Hoisting

/* saludar( "hola" ) */

// Declaracion de funcion
function saludar( mensaje ){
    console.log(mensaje)
}

// Expresion de funcion
const saludarDos = function( nombre ){
    console.log( "Hola " + nombre)
}

/* saludarDos( 'Mauri' ) */


// Scope

// var -> local || Global
// let, const -> bloque
/* {
    {
        var nombre = 'nicolas'
    }
    console.log(nombre)
} */


//funciones flecha
// siempre son anonimas
// si la funcion tiene una sola linea de ejecucion, se puede dejar sin llaves y el return se da por implicito
// Si la funcion tiene un solo parametro, se puede dejar sin parentesis 
// El this no puede cambiar
// las funciones flecha no tienen disponible arguments, aplly, bind, call
const sumar = (numUno, numDos) => {
    return numUno + numDos
} 

const restar = ( numUno, numDos ) => {
    return numUno - numDos
}

const multiplicar = ( numUno, numDos ) => numUno * numDos

const dividirPorTres = numUno => numUno / 3

console.log( sumar( 5, 15 ) )

console.log( restar( 15, 5 ) )

console.log( multiplicar(5, 6) )

console.log( dividirPorTres( 15 ) )
console.log( "-------")

const sumarNumeros = function() {
    let resultado = 0
    for( let argumento of arguments ){
        resultado += argumento
    }
    return resultado
} 


const lucre = {
    nombre : 'Lucre',
    edad : 27,

    presentarse() {
        console.log(this)
        console.log( `Hola me llamo ${this.nombre} y tengo ${this.edad} años `)
    },
    
}
lucre.presentarse()
console.log( sumarNumeros( 10, 5) )

