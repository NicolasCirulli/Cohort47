// bucles 
// bucles for - while - do while
// 1. Imprimir los números desde contador hasta numero


let numero = 2
/* for( let i = 1; i <= numero; i++ ){
        console.log( i )
} */

// 2. Imprimir los números del numero ingresado por el usuario al 1
/* for( let i = numero;  i >= 1  ; i-- ){
        console.log( i )
} */


// 3. Imprimir los números pares del 1 al numero ingresado por el usuario
/* for( let i = 1; i <= numero; i++ ){
      if( i % 2 == 0 ){
            console.log( i )
      }
} */

// 4. Imprimir los números impares del 1 al numero ingresado por el usuario
/* for( let i = 1; i <= numero; i++ ){
    if( i % 2 !== 0 ){
        console.log( i )
    }
} */

// Realizar un programa que permita el ingreso de un número y muestre su tabla de 
// multiplicar (Los primeros 10 múltiplos).  
/* let numeroIngresado = 5
let numeroIngresado2 = 10

function mostrarTabla( numero ){
    if( typeof numero == 'number' ){
        console.log( `Tabla del ${numero}` )
        for( let i = 1; i <= 10; i++ ){
            console.log(`${i} x ${numero} = ${i * numero}`)
        }
    }else{
        console.log(`"${numero}" no es un valor valido`)
    }
} */

// Valores falsy - false, null, undefined, "", NaN, 0, -0
// While
/* let nombreIngresado = prompt( 'Ingrese un nombre' )
const nombres = [ ]
while ( nombreIngresado ) {
    nombres.push( nombreIngresado )
    nombreIngresado = prompt( 'Ingrese un nombre' )
} 
console.log( nombreIngresado )
console.log( nombres ) */


// Do While
/* let nombreIngresado
const nombres = [ ]
do {
    nombreIngresado = prompt( 'Ingrese un nombre' )
    nombres.push( nombreIngresado )
}  while ( nombreIngresado ); */

console.log( mentores )

/* 
for( let i = 0; i < mentores.length; i++){
    console.log( mentores[i].nombre )
} */

// bucles ECMA6 for of


function filtroPorTec( mentoresQueLleganPorParametro, tecnologiaQueLLegaPorParametro ){
    const mentoresFiltrados = [ ]
    for( let mentor of mentoresQueLleganPorParametro ){
        if( mentor.tecnologias.includes( tecnologiaQueLLegaPorParametro) ){
            mentoresFiltrados.push( mentor )
        }
    }
    return mentoresFiltrados
} 

function mostrarNombresMentores( mentores ){
    for( let mentor of mentores ){
        console.log( mentor.nombre )
    }
}

function filtroPorModulo( mentores, modulo ) {
    let aux = []
    for( let mentor of mentores ){
        if( mentor.modulo.toLowerCase() == modulo.toLowerCase() ){
            aux.push( mentor )
        }
    }
    return aux
}
const mentoresQueSabenNode = filtroPorTec( mentores, 'NodeJS' ) 
const mentoresQueSabenJava = filtroPorTec( mentores, 'Java' )

const mentoresModuloJS = filtroPorModulo(  mentores, 'WeB' )
console.log( mentoresModuloJS )
