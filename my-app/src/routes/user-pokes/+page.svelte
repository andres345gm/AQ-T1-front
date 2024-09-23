<script lang="ts">
    import logo from '$lib/images/pokemon2.png';
    import welcome_fallback from '$lib/images/svelte-welcome.png';
    import pokeQuestion from '$lib/images/poke-question.png'; // Imagen de interrogante
    import Info_poke from '../components/info-pokemon/Info_poke.svelte';
    import MiniPoke from '../components/mini-poke/minipoke.svelte';
    import axios from 'axios';
    // Generar lista de 30 pokes con valores adicionales
    const user_id = localStorage.getItem('user_id');

    const user_id_i = parseInt(user_id ?? '0');

    interface PokeMini {
        id: string | number;
        name: string;
        image: string;
    }

    interface Purchase {
        id: number;
        id_pokemon: number;
        date: string;
        price: number;
        id_user: number;
    }

	let miniPokes: PokeMini[] = [];

    // Obtener la lista de compras del usuario
    axios.get('http://127.0.0.1:8000/purchase/user/' + user_id_i)
        .then(response => {
            const purchases = response.data;

            // Iterar sobre cada compra
            const promises = purchases.map((purchase: Purchase) => {
                const pokemonId = purchase.id_pokemon;
                return axios.get('http://127.0.0.1:8000/poke/' + pokemonId)
                    .then(pokeResponse => {
                        // Crear un mini poke con la información obtenida
                        return {
                            id: pokeResponse.data.id,
                            name: pokeResponse.data.name,
                            image: pokeResponse.data.image
                        };
                    });
            });

            // Esperar a que todas las peticiones se completen
            return Promise.all(promises);
        })
        .then(miniPokeArray => {
            miniPokes = miniPokeArray; // Asignar los mini pokes a la lista
            console.log(miniPokes); // Verificar los mini pokes obtenidos
        })
        .catch(error => {
            console.error(error);
        });


	interface Poke {
        id: string | number;
        name: string;
        image: string;
        hp: string | number;
        attack: string | number;
        height: string | number;
        weight: string | number;
    }

    // Poke seleccionado (inicialmente con valores por defecto)
    let pokeSeleccionado: Poke = {
        id: '?',
        name: '?',
        image: pokeQuestion,
        hp: '?',
        attack: '?',
        height: '?',
        weight: '?'
    };

    // Función para seleccionar un mini poke
    function seleccionarPoke(poke: PokeMini) {
        axios.get('http://127.0.0.1:8000/poke/' + poke.id)
        .then(response => {
            console.log(response.data);
            pokeSeleccionado = response.data;
        })
        .catch(error => {
            console.error(error);
        });
    }
</script>

<svelte:head>
    <title>Inicio</title>
    <meta name="description" content="Pokedex" />
</svelte:head>

<section>
    <div class="bienvenida">
        <picture class="pokemon">
            <source srcset={logo} type="image/webp" />
            <img src={welcome_fallback} alt="Welcome" width="150px" height="150px"/>
        </picture>

        <h1>Tus pokes comprados</h1>
    </div>

    <div class="info">
        <div class="lista">
            {#each miniPokes as poke}
                <MiniPoke {poke} on:click={() => seleccionarPoke(poke)} />
            {/each}
        </div>

        <Info_poke {pokeSeleccionado} />
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
    
    .bienvenida {
        display: flex;
        gap: 30px;
    }

    .lista {
        height: 500px;
        width: 500px;
        background-color: rgb(246, 245, 238);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 1.5rem;
        padding: 10px;
        display: flex;
        flex-wrap: wrap; /* Para que haga salto de línea */
        overflow-y: auto; /* Permite el scroll */
        gap: 10px;
    }

    .info {
        display: flex;
        gap: 80px;
    }
</style>
