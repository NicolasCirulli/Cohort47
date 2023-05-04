// Instruccion, en este caso que muestre algo por consola
console.log("Hola");
console.log(2+1);

// Bloque de código, la intrucción vive solo dentro del bolque
{
     console.log("Hola");
}

// Declarar o crear función nombrada
// Palabra reservada + Nombre de la fn + parametros, si es que lleva + cuerpo, donde definimos que hace
function saludar (){
     console.log("Hola");
}

function sumar (){
     console.log(2+1);
}

// Ejecutar una función nombrada
saludar()
sumar()

//Declarar o crear función anónima
let sumar = function (){
     console.log(2+1);
}

// Ejecutar o crear una función anónima
sumar()

// Diferencia al consologuear una fn nombrada y una fn anónima
console.log(saludar);
console.log(sumar);

// Creando variables dentro de la función
function sumar (){
     let x = 2;
     console.log(x);
     let y = 1;
     console.log(y);
     console.log(x + y);
}
sumar()


// Cuando declaramos la fn, a y b son parámetros
function adicion (a,b){
     let x = 2;
     console.log(x);
     let y = 1;
     console.log(y);
     console.log(x + y);
}

// Cuando ejecutamos la fn, 5 y 10 son argunmentos
adicion(5,10);

// Forma correcta de que la función busque algo fuera de ella,
// las variables no se llaman dentro, se ingresan por parámetros.
let x = 3;
let y = 1;

function operacion ( numeroA, numeroB ){

     console.log(numeroA);
     console.log(numeroB);
     console.log(`Suma ${numeroA} con ${numeroB} = ${numeroA+numeroB}`);

}
operacion(x,y);

// Forma correcta de que la función devuelva algo fuera de ella.
// El return define que va a devolver la función.
let mensaje = "Hola a todos!"

function concatenar (saludo) {
     let resultado = saludo + "¿Cómo están?"
     return resultado
}
console.log(resultado);
let mensajeBienvenida = concatenar(mensaje);
console.log(mensajeBienvenida);

// Programa para definir edad
// PRIMERA PARTE - Calcular la edad del usuario
let fechaNacimientoUsuario = 2004
let fechaActual = 2023

let edadUsuario = fechaActual - fechaNacimientoUsuario
console.log(edadUsuario);

function calcularEdadUsuario ( fechaNacimiento ,  fechaActual ){
     let diferencia = fechaActual - fechaNacimiento
     return diferencia
}

let edadUsuarioCalculada =  calcularEdadUsuario(1994, 2023)
console.log(edadUsuarioCalculada);
let edadUsuario2Calculada =  calcularEdadUsuario(2004, 2023)
console.log(`La edad del usuario2 es ${edadUsuario2Calculada} años`);

// SEGUNDA PARTE - Definir si el ususrio es mayor de edad
function comprobarUsuarioMayorDeEdad ( edad ){
     let mayoriaEdad = 18;
     let permiso = edad >= 18
     return permiso
}

let usuario = "Nicolás";
let usuario2 = "Joaquín";
let permisoNicolas = comprobarUsuarioMayorDeEdad(edadUsuarioCalculada);
let permisoJoaquin = comprobarUsuarioMayorDeEdad(edadUsuario2Calculada);
console.log(`${usuario} tiene ${edadUsuarioCalculada} y su permiso para ingresar es ${permisoNicolas}`);
console.log(`${usuario2} tiene ${edadUsuario2Calculada} y su permiso para ingresar es ${permisoJoaquin}`);

// TERCERA PARTE - Unificar todo en una función mayor
function admitirUsuario (nombre, fechaNacimiento, fechaActual,){
     let edadUsuario = calcularEdadUsuario(fechaNacimiento,fechaActual)
     let permiso = comprobarUsuarioMayorDeEdad(edadUsuario)
     let sentenciaFinal = `${nombre} tiene ${edadUsuario} y su permiso para ingresar es ${permiso}`
     console.log(sentenciaFinal);
     return sentenciaFinal
}
admitirUsuario("Lucre", 1993, 2023)
