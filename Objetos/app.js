// tipos de datos primitivos
// string, number, boolean, undefined, null

// tipo de dato -> funciones

// tipo de dato -> objetos
const nombre = "Nicolás"
const nicolas = {
    "nombre": "Nicolás",
    "apellido": "Cirulli",
    "edad": 28,
    "estatura": 1.74,
    "mentor": true,
    "mascota" : {
        "nombre": "Kugi",
        "edad": 2
    },

    presentarse : function(){
        console.log( `Hola soy ${this.nombre}` )
    }
}

const nicolasDos = {
    nombre: "Nicolás",
    apellido: "Cirulli",
    edad: 28,
    estatura: 1.74,
    mentor: true,
    mascota : {
        nombre: "Kugi",
        edad: 2
    },

    presentarse : function(){
        console.log( `Hola soy ${this.nombre}` )
    }
}

// misma referencia al objeto pero con distinto identificador
const nicolasCopia = nicolas

// modifico una propiedad existente
nicolasCopia.nombre = "Juan"

// agrego una propiedad nueva
nicolas.club = "San lorenzo"

// elimino una propiedad
delete nicolas.mentor


// Estructuras de datos -> arrays
const mentores = [  'Nico', 'Fede', 'Lucre', 'Flor'  ]

console.log( mentores )

console.log( mentores[1] )
console.log( mentores[2] )

console.log( `Mentores tiene ${ mentores.length } elementos` )

// como agregar un valor al final del array

mentores.push( "Kevin", "Guille" )

// agregar elemento al principio del array

mentores.unshift( "Cami" )

// eliminar el ultimo elemento del array
mentores.pop()

// eliminar el primer elemento del array
mentores.shift()

console.log(mentores)

console.log('Fin del script')


