console.log('metodos de string')
// Metodos string
const nombre = "  Nicolas Cirulli"
/* toLowerCase retorna el mismo string pasado a minuscula*/
const nombreEnMinuscula = nombre.toLowerCase()
/* toUpperCase */
const nombreEnMayuscula = nombre.toUpperCase()
console.log(nombreEnMayuscula)
/* substring */
const subConjunto = nombre.substring(4)
console.log( subConjunto )
/* slice */
const subConjunto2 = nombre.slice(2, -3)
console.log( subConjunto2 )
/* trim */
console.log( nombre)
console.log( nombre.trim() )
/* split */
console.log( nombre.trim().split(" ") )
/* includes */
console.log( nombre.toLowerCase().includes( "nico" ) )
/* startsWith */
console.log( nombre.trim().toLowerCase().startsWith( "nico" ) )
/* replace */
console.log( nombre.trim().replace( "Nicolas", "Catriel" ) )
/* replaceAll */
console.log(nombre.trim().replaceAll(" ", "_")) 
/* repeat */
console.log( nombre.trim().repeat(2) )

console.log('----')


console.log('Numbers')
// numbers

/* Number() */
console.log( Number( "20.5" ) ) /* -> 20.5 */
console.log( Number( "asdasd" ) ) /* -> NaN */


/* parseInt */
console.log( parseInt( 20.5 ) ) /* -> 20 */
console.log( parseInt( "20.5" ) ) /* -> 20 */
console.log( parseInt( "asd" ) ) /* -> NaN */

/* parseFloat */
console.log( parseFloat( "20.6" ) ) /* -> 20.6 */
console.log( parseFloat( 20 ) ) /* -> 20 */
console.log( parseFloat( "___" ) ) /* -> NaN */

/* toFixed */
console.log( Number( 20.5444.toFixed(2) ) ) /* -> 20.54 en string */

/* isNaN */
console.log( isNaN( 2 ) ) /* -> false */
console.log( isNaN( "20" ) ) /* -> false */
console.log( isNaN( "asd" ) ) /* -> true */


// Metodos Math
console.log( Math )
/* min */
console.log( Math.min(10,2,30,1,230) )
/* max */
console.log( Math.max(10,2,30,1,230,10) )
/* random */
console.log( "Numero random: ",  Math.random() * 10 )
/* round */
console.log( "Numero redondeado con round: ", Math.round( 11.3 ) )
console.log( "Numero redondeado con round: ", Math.round( 11.5 ) )
/* floor */
console.log( "Numero redondeado con floor: ", Math.floor( 11.3 ) )
console.log( "Numero redondeado con floor: ", Math.floor( 11.9 ) )
/* ceil */
console.log( "Numero redondeado con ceil: ", Math.ceil( 11.3 ) )
console.log( "Numero redondeado con ceil: ", Math.ceil( 11.9 ) )
/* abs */
console.log( "Valor absoluto: " , Math.abs( -10 ) )
console.log( "Valor absoluto: " , Math.abs( 10 ) )

// Metodos de array
console.log('Metodos de array')
const mentoresWeb = ['cami', 'flor', 'kevin','sil']
const mentoresJS = [ "nico", 'lucre', 'fede' ]
const mentoresJava = ['guille', 'seba', 'elias', 'martin']
/* includes */
console.log( mentoresJS.includes( "lucre" ) )
/* indexOf */
console.log( mentoresJS.indexOf( "lucre" ) )

const nombreABuscar = "nico"
if( mentoresJS.indexOf( nombreABuscar ) == -1 ){
    console.log( `${nombreABuscar} no se encuentra en la lista` )
}else{
    console.log(`${nombreABuscar} se encuentra en la lista en la posicion ${mentoresJS.indexOf( nombreABuscar )}`)
}
/* reverse */
/* mentoresJS.reverse() */
/* console.log( mentoresJS ) */

/* join */
console.log( mentoresJS.join( '_' ) )


/* splice */
/* mentoresJS.splice( 2, 2,'seba', 'elias' ) */
console.log( mentoresJS )

/* concat */
const copiaMentores = [].concat( mentoresJS ).reverse()
/* console.log( "Mismo array: ", copiaMentores == mentoresJS ) */

const equipoAcademico = mentoresWeb.concat( mentoresJS, mentoresJava )

/* flat */

const numeros = [ 

    [1,2,3], 
    [23,4,1,23], 
    [1,23,4,5], 
    [ 1, 2, 3, ['asd', 'asd']] 
    
]
console.log(numeros.flat(2))
