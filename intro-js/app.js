

// Variables

// var, let, const

var miNombreCompleto
miNombreCompleto = "Nicolás Catriel"
miNombreCompleto = "Nicolás Catriel Cirulli"

var miNombreCompleto

let miNombreCompleto2 
miNombreCompleto2 = "Nicolás Catriel"
miNombreCompleto2 = "Nicolás Catriel Cirulli"

let otraVariableNueva = "otra variable"
let otraVariableNuevaDos = "otra variable"

const dni = 12345678


// Tipos de datos Primitivos

// string -> "", '', ``

let nombre = "Nicolás"
let segundoNombre = 'Catriel'
let apellido = `Cirulli`
const nombreCompleto = `${nombre} ${segundoNombre} ${apellido}`
const nombreCompletoDos = nombre + " " + segundoNombre + " " +  apellido
const ejemploComillasInvertidas = `  asdasd 
    ${nombre}
`
const ejemploEscaparCaracteres = "El mentor dijo: \n \"No usen var\" "
/* console.log( ejemploEscaparCaracteres ) */



// Number
let edad = 28
let estatura = 1.74
let numeroNegativo = -1

// Boolean

let esMayorDeEdad = true
let esMenorDeEdad = false

// Undefined

let variableSinValor
/* console.log(variableSinValor) */

// Null

let variableNula = null
/* console.log( variableNula ) */

const textoPresentacion = `Mi nombre es ${nombreCompleto} y tengo ${edad} años`
/* console.log( textoPresentacion ) */

// typeof

console.log("Hola", typeof "Hola" )
console.log( "28", typeof 28 )
console.log( typeof true )
console.log( typeof undefined )


// Operadores Aritmeticos

// +, -, *, /, %, **

let numeroUno = 20
let numeroDos = 10

const resultadoSuma = numeroUno + numeroDos
const resultadoResta = numeroUno - numeroDos
const resultadoProducto = numeroUno * numeroDos
const resultadoDivision = numeroUno / numeroDos
const resultadoModulo = numeroUno % numeroDos
const resultadoExponente = numeroUno ** numeroDos

console.log("Resultado suma:",  resultadoSuma )
console.log("Resultado resta:",  resultadoResta )
console.log("Resultado producto:",  resultadoProducto )
console.log("Resultado division:",  resultadoDivision )
console.log("Resultado modulo:",  resultadoModulo )
console.log("Resultado exponente:",  resultadoExponente )

console.log( "Suma string con numero: ", typeof ( 20 + "30" ) )

// Operadores de comparacion - Siempre nos retorna un boolean

// ==, ===, !=, !==, >, <, >=, <=
console.log( " Igualdad " )
console.log( "20 == 20", 20 == 20 )
console.log( "20 == 20", 20 == "20" )
// Comparacion estricta se fija valor pero también tipo de dato
console.log( '20 === "20"', 20 === "20" )

console.log(" Distinto ")
console.log( "20 != 20", 20 != 20 )
console.log( "20 != '20'", 20 != "20" )
// Comparacion estricta se fija valor pero también tipo de dato
console.log( "20 !== '20'", 20 !== "20" )

console.log( "Mayor que, mayor igual" )
console.log( "20 > 10", 20 > 10 )
console.log( "20 >= 20", 20 >= 20 )
console.log( "10 >= 20", 10 >= 20 )

console.log( "Menor que, menor igual" )
console.log( "20 < 10", 20 < 10 )
console.log( "20 <= 20", 20 <= 20 )
console.log( "10 <= 20", 10 <= 20 )

// Ingresar un valor desde el navegador
const nombreIngresado = prompt( "Ingrese un nombre" )
const mensajeSaludo = `Hola ${nombreIngresado}`
console.log( nombreIngresado )
alert( mensajeSaludo )