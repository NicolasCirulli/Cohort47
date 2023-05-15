const nicolas = {
    nombre: 'Nicolas Catriel',
    apellido: 'Cirulli',
    nombreCompleto: 'Nicolás Catriel Cirulli',
    club: 'San Lorenzo',
    mascota : false
}

/* console.log('Object.keys recibe un objeto y nos retorna un array con las llaves del objeto recibido ')
console.log('keys:', Object.keys( nicolas )) */


/* console.log('Object.values recibe un objeto y nos retorna un array con los valores del objeto recibido ')
console.log('values: ', Object.values( nicolas )) */


/* console.log('Object.entries recibe un objeto y nos retorna un array de arrays con los pares llave-valor')
console.log('Entries: ', Object.entries( nicolas )) */


/* console.log('Object.assign recibe un objeto destino y un objeto fuente (pueden ser varios objetos fuentes)')*/

/* console.log('assign: ', Object.assign(nicolas, mentores[0] ))  */  
Object.assign(nicolas, mentores[0])

/* console.log('Object.hasOwn recibe un objeto y una key, verifica si el objeto tiene la key y retorna un booleano')
console.log('hasOwn: ', Object.hasOwn( nicolas, 'mascota' )) */

/* console.log( 'Object.freeze recibe un objeto y lo vuelve de solo lectura' )
Object.freeze( nicolas ) */



// copia y union arrays
const numeros = [1,2]
const numerosSiguientes = [3,4,5]

const copiaNumeros = numeros.concat()
/* console.log('Copia numeros:', copiaNumeros ) */


const numerosCompletosConcat = numeros.concat(numerosSiguientes)
/* console.log('Array nuevo con concat: ', numerosCompletosConcat ) */

const numerosCompletosFlat = [ numeros, numerosSiguientes ].flat()
/* console.log( 'Array nuevo con flat:', numerosCompletosFlat ) */


// Spread syntax ...


let copiaConSpread = [ ...numeros  ]
/* console.log( `Copia con spread: `, copiaConSpread ) */

/* let numerosCompletosSpread = [ 0,...numeros,...numerosSiguientes, 6,7,8,9]
console.log( numerosCompletosSpread ) */
/* 
let copiaNicolas = {...nicolas, juego:'lol'}
console.log( copiaNicolas ) 
*/

// n argumentos en una funcion
const sumar = (a,b,...argumentos) => {
    let resultado = 0
    console.log('a', a)
    console.log('b', b)
    console.log( 'argumentos',argumentos )
    for (const argumento of argumentos) {
        resultado += argumento
    }
    console.log(`El resultado de la suma es: ${resultado}`)
}
/* sumar( 1,2,3,4,5,6 ) */

const numerosParaFn = [10, 5, 5]
const sumarTresNumeros = (a,b,c) => {
    console.log( a+b+c )
}
/* sumarTresNumeros( ...numerosParaFn ) */


/* Destructuring assignment*/

/* 
const segundoElemento = numeros[0]
const primerElemento = numeros[1] 
*/
const nombres = ['nicolas', 'lucre']
const [ segundoElemento,primerElemento  ] = nombres

/* console.log('Primer elemento:', primerElemento )
console.log('Segundo elemento:', segundoElemento ) */

/* const nombre = nicolas.nombre
const edad = nicolas.edad
const modulo = nicolas.modulo  */

let nombre = 'Catriel'

/* const { edad, modulo, nombre:nombreNicolas, club:clubNicolas } = nicolas */

/* console.log('Valores sacados de un objeto: ', nombreNicolas,edad,modulo,clubNicolas) */


/* ternary */


/* 
condicion 
    ? si se cumple 
    : si no se cumple 
*/

/* let nombreIngresado = 'catriel' */
/* let mensaje
if( nombreIngresado ){
    mensaje = `Hola ${nombreIngresado}`
}else{
    mensaje = `Hola alumno`
} */
/* let mensaje = `Hola ${nombreIngresado ? nombreIngresado : 'alumno'}` */
/* console.log( mensaje ) */


/* OR( || ) - Nullish( ?? ) assignment */
/* let mentorConValores = { ...mentores[0] }
let mentorSinValores = Object.assign({}, mentores[10] ) */

/* let tecnologias = mentorSinValores.tecnologias || []

mentorConValores.tecnologias ||= [] */

/* console.log( mentorConValores ) */

/* let edad = mentorSinValores.edad ?? 'desconocida'

mentorSinValores.edad ??= 'desconocida'

console.log( mentorSinValores ) */