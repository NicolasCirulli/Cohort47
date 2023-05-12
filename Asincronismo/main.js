console.log("inicio")


function traerAlumnos(booleano){
    return new Promise((resolve, reject)=>{
        const alumnos = ["juan", "pedro", "maria"]
        if(booleano){
            resolve(alumnos)
        }else {
            setTimeout(()=>{
                reject("No encontré la lista")
            },2000)
        }
    //    resolve(alumnos)
        // reject("No encontré la lista")

    })
}

// //promesa
// .then(callback) //tratar la promesa en caso positivo
// .catch(callback) //tratar la promesa en caso negativo
// .finally() //se va a ejecutar indistinto del resultado de la promesa 


traerAlumnos(false)
.then((res)=>console.log(res))
.catch(error => console.log(error))
.finally(console.log("Terminó la promesa"))
console.log(traerAlumnos(true))

console.log("fin")