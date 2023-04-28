// operadores logicos && || !

// AND && 

/* let numero = 15
let numeroDos = 10

let mayor = numero > numeroDos
let par = numero % 2 === 0 */
/* console.log( mayor )
console.log( par )
console.log( mayor && par ) */

// OR ||
/* console.log("mayor: ", mayor)
console.log("par: ", par)
console.log( "mayor || par ", mayor || par ) */


// NOT !
/* console.log( "Not par", !par )
console.log( "Not mayor", !mayor ) */


// if, else if, else

/* let yerba = false

if( yerba ){
    console.log('Preparar mate')
}else{
    console.log('Voy a comprar yerba')
} */

let edad = -10

/* if( edad >= 18 ){
    console.log('Es adulto')
}

if( edad >= 12 && edad < 18 ){
    console.log('Es adolescente')
}

if( edad < 12 ){
    console.log('Es niño')
}
 */

if( edad >= 18 ){
    console.log('Es adulto')
}else if( edad >= 12 && edad < 18 ){
    console.log('Es adolescente')
}else if( edad < 12 && edad > 0 ){
    console.log('Es niño')
}else{
    console.log('Edad invalida')
}


// switch

let operacion = prompt( "Ingrese operacion: suma, resta, multiplicacion, division" )
let numeroUno = Number( prompt( 'Ingrese el primer numero' ) )
let numeroDos = Number( prompt( 'Ingrese el segundo numero' ) )


switch ( operacion ) {
    case "suma":
        console.log( `El resultado de sumar ${numeroUno} y ${numeroDos} es ${numeroUno + numeroDos}` )
        break;
    case "resta":
        console.log( `El resultado de restar ${numeroUno} y ${numeroDos} es ${numeroUno - numeroDos}` )
        break;
    case "multiplicacion":
        console.log( `El resultado de multiplicar ${numeroUno} y ${numeroDos} es ${numeroUno * numeroDos}` )
        break;
    case "division":
        console.log( `El resultado de dividir ${numeroUno} y ${numeroDos} es ${numeroUno / numeroDos}` )
        break;
    default:
        console.log('operacion no valida')
        break
}

console.log('asd')