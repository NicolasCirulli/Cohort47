const {createApp} = Vue

const app = createApp({

    data(){
        return {
            personajesFavoritos:[]
        }
    },
    created(){
        this.personajesFavoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []
    }
} )

app.mount('#app')