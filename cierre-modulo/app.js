const API_URL = "https://hp-api.onrender.com/api/characters";

// reduce

// axios

// async await

// try catch

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            titulo: "Titulo de la pagina",
            personajes: [],
        };
    },

    created() {
        this.getData(API_URL);
    },

    methods: {
        async getData(url) {
            try {
                const { data } = await axios.get(url);
                this.personajes = data.filter((e) => e.house);
                const aux = this.personajes.reduce((acumulado, personaje) => {

                    let gender = personaje.gender

                    if (acumulado[personaje.house]) {
                        acumulado[personaje.house].cantidadDeEstudiantes += 1

                        if (acumulado[personaje.house][gender]) {
                            acumulado[personaje.house][gender]++
                        } else {
                            acumulado[personaje.house][gender] = 1
                        }

                        if (personaje.wizard) {
                            acumulado[personaje.house].cantidadWizad += 1
                        }
                    } else {
                        acumulado[personaje.house] = {
                            casa: personaje.house,
                            cantidadDeEstudiantes: 1,
                            cantidadWizad: personaje.wizard ? 1 : 0
                        };
                        acumulado[personaje.house][gender] = 1
                    }
                    return acumulado
                }, {});
                console.log(aux);
            } catch (err) {
                console.log("entro en el catch");
            }
        },
    },
});

app.mount("#app");

const aux = {
    Gryffindor: {
        cantidadDeEstudiantes: 40,
        male: 20,
        female: 20,
        cantidadWizad: 25,
    },
};
