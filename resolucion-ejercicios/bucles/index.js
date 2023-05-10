/*
    N°4 | Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible 
    por el valor 1 y por sí mismo. Ayuda!: Usar la operación de módulo. Los números solo poseen divisores hasta 
    la mitad del valor del mismo. Dicho de otra forma, si haces la división por cualquier número que no sea 1 o él 
    mismo, se obtiene un resto distinto de cero. 
*/

function esPrimo( numero ) {
    if( numero == 2 ){
        return 'primo'
    }
    for( let i = 2; i < numero; i++){
        if( numero % i == 0 ){
            return 'compuesto'
        }
    }
    return 'primo'
}

const primos = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97 ]
const compuestos = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88,]
const numeros = primos.concat(compuestos)
console.log( numeros )
/* 
    for( let numero of numeros ){
        console.log( `El numero ${numero} es :${ esPrimo( numero ) }` )
    } 
*/

/* 
    Dado un array de 10 números desordenados, realizar un programa que imprima por pantalla el array 
    ordenado. (NO USAR SORT, solo ciclos FOR)
*/


let desordenados = [ 5,7,3,8,1,6,2,4,9,10]
function ordenarArray( array ) {
    let contador = 0
    for( let i = 0; i < array.length; i++ ){
        for (let j = 0; j < array.length; j++) {
            contador++
            const element = array[j]
            const element2 = array[j + 1 ]
            if( element > element2 ){
                array[j] = element2
                array[j + 1] = element
            } 
        }
    }
    console.log(contador)

}
ordenarArray( numeros )
console.log( numeros  )
