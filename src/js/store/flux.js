const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [

            ],
            festejo: false,
            estilo1: "rebelalliance1",
            estilo2: "rebelalliance2",
            fondo: "rebelalliance3",
            texto: "rebelalliance4",
            estilo5: "rebelalliance5",
            personajes: [],
            planetas: [],
            naves: [],
            laNave: {},
            elPersonaje: {},
            todosLosPersonajes: {},
            elPlaneta: {},
            favoritos: [],
            casita: "",
            // {nombre: Nombre del coso, tipo: elTipo(people, starships, planets), ids: el id predeterminado}
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                        	fetch().then().then(data => setStore({ "foo": data.bar }))
                        */
            },

            traerPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            personajes: data.results,
                        })
                    );
            },

            traerTodosLosPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            personajes: data.results
                        })
                    );
            },

            traerLaNave: (elnumero) => {
                let store = getStore();
                console.log(elnumero);
                fetch("https://www.swapi.tech/api/starships/" + elnumero)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        laNave: data.result.properties
                    }))
            },

            traerElPersonaje: (elnumero) => {
                fetch("https://www.swapi.tech/api/people/" + elnumero)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        elPersonaje: data.result.properties
                    }))
            },

            traerElplaneta: (elnumero) => {
                fetch("https://www.swapi.tech/api/planets/" + elnumero)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        elPlaneta: data.result.properties
                    }))

            },

            traerPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas: data.results
                    }));
            },

            traerNaves: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            naves: data.results,
                        })
                    );
            },

            agregarFavoritos: () => {
                console.log("Funciona")
            },

            removerItem: (index) => {
                let store = getStore();
                const newLista = store.favoritos;
                console.log(newLista)
                newLista.splice(index, 1);
                console.log(newLista)
                setStore({
                    favoritos: newLista
                });
                console.log(store.favoritos)
            },

            agregarItem: (nombres, ids, tipo) => {
                let store = getStore();
                let unItem = {}
                unItem.nombre = nombres
                unItem.tipo = tipo
                unItem.id = ids
                let exist = store.favoritos.find(obj => obj.nombre === nombres)
                if (exist === undefined) {
                    let audio = new Audio("http://www.jedisaber.com/SW/sounds/ESB056.wav");
                    audio.play();
                    setStore({
                        favoritos: [...store.favoritos, unItem],
                        festejo: true
                    })
                } else {
                    setStore({
                        favoritos: store.favoritos.filter(item => item !== exist)
                    })
                }
                setTimeout(() => {
                    setStore({
                        festejo: false
                    })
                }, 700)
            },

            ponerEndor: () => {
                setStore({
                    estilo1: "endor1",
                    estilo2: "endor2",
                    fondo: "endor3",
                    texto: "endor4",
                    estilo5: "endor5",

                })
            },

            ponerTatooine: () => {
                setStore({
                    estilo1: "tatooine1",
                    estilo2: "tatooine2",
                    fondo: "tatooine3",
                    texto: "tatooine4",
                    estilo5: "tatooine5"
                })
            },

            ponerAlderaan: () => {
                setStore({
                    estilo1: "alderaan1",
                    estilo2: "alderaan2",
                    fondo: "alderaan3",
                    texto: "alderaan4",
                    estilo5: "alderaan5"
                })
            },

            ponerDeathStar: () => {
                setStore({
                    estilo1: "deathstar1",
                    estilo2: "deathstar2",
                    fondo: "deathstar3",
                    texto: "deathstar4",
                    estilo5: "deathstar5"
                })
            },

            ponerRebelAlliance: () => {
                setStore({
                    estilo1: "rebelalliance1",
                    estilo2: "rebelalliance2",
                    fondo: "rebelalliance3",
                    texto: "rebelalliance4",
                    estilo5: "rebelalliance5"
                })
            },

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;