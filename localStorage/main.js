const { createApp } = Vue
const options = {
    data(){
        return {
            personajes : [],
            casas : [],
            valorBusqueda: "",
            checked: [],
            personajesFiltrados : [],
            personajesFavoritos: [],
            loader:true
        }
    },
    created(){
        this.personajesFavoritos = this.getLocalStorage() ?? []
        fetch('https://hp-api.onrender.com/api/characters/students')
            .then( response =>  response.json() )
            .then( datos => {
                this.personajes = datos.filter( personaje => personaje.house )
                this.personajesFiltrados = [ ...this.personajes]
                this.casas = [ ...new Set( this.personajes.map( personaje => personaje.house ) ) ]
               
            } )
            .catch( err=> console.log(err) )
            .finally( () => this.loader = false  )
    },
    
    methods: {
        toggleFav(id){
            if( this.personajesFavoritos.find( personaje => personaje.id == id ) ){
                // si entra en el if tengo que sacarlo 
                this.personajesFavoritos = this.personajesFavoritos.filter( personaje => personaje.id != id )
            }else{
                // Si entra en el else tengo que agregarlo
                const aux = this.personajes.find( personaje => personaje.id == id )
                this.personajesFavoritos.push( aux )
            }
            // mando los favoritos a localStorage
            const json =  JSON.stringify( this.personajesFavoritos ) 
            localStorage.setItem( "favoritos", json )
        },
        getLocalStorage(){
            return JSON.parse( localStorage.getItem( "favoritos" ) )
        }
    },
    computed: {
        filtroCruzado: function(){
            let filtradoPorBusqueda = this.personajes.filter( personaje => personaje.name.toLowerCase().includes( this.valorBusqueda.toLowerCase()))
            if( this.checked.length === 0 ){
                this.personajesFiltrados = filtradoPorBusqueda
            }else{
                let filtradosPorCheck = filtradoPorBusqueda.filter( personaje => this.checked.includes( personaje.house ))
                this.personajesFiltrados = filtradosPorCheck 
            }
        }
    }
} 
createApp( options ).mount("#app")
