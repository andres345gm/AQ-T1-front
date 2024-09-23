<script lang="ts">
	import logo from '$lib/images/pokemon2.png';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Compra  from '../components/compra-pokemon/Compra.svelte';
	import MiniPoke from '../components/mini-poke/minipoke.svelte'; // Importamos el componente
    import pokeQuestion from '$lib/images/poke-question.png'; // Imagen de interrogante
    import axios from 'axios';
    import dinero from '$lib/images/dinero-icon.png';
    import { onMount } from 'svelte';
        // Generar lista de 30 pokes con valores adicionales
    let balance = 5; // Valor predeterminado

    interface PokeMini {
        id: string | number;
        name: string;
        image: string;
    }
	let miniPokes: PokeMini[] = [];

    axios.get('http://127.0.0.1:8000/poke/all/30')
        .then(response => {
            console.log(response.data);
            miniPokes = response.data;
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


        function actualizarBalance() {
			const user_balance = localStorage.getItem('user_balance'); // Obtener el dato guardado
			if (user_balance) {
				balance = parseFloat(user_balance); // Convertir a número
				console.warn("BALANCE PUESTO");
			} else {
				console.warn("No se encontró el usuario en localStorage.");
			}
		}
		// Llama a la función cuando se monta el componente
		onMount(() => {
			actualizarBalance();
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

		<h1 >
			Pokes disponibles
		</h1>
	</div>

	<div class="info">
		<div class="lista">
            {#each miniPokes as poke}
                <MiniPoke {poke} on:click={() => seleccionarPoke(poke)} />
            {/each}
        </div>

		<Compra {pokeSeleccionado}/>
	</div>
    <div class="dinero-div">
        <img src={dinero} alt="logoprecio" width="40px" height="40px">
        <p>Mi dinero: {balance}</p>
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
	.bienvenida
	{
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
	
	.info
	{
		display: flex;
		gap: 80px;
	}

    .dinero-div
	{
        margin-top: 15px;
		align-items: center;
		display: flex;
		gap: 10px;
		border: 0.5px black solid;
		border-radius: 1.5rem;
		padding: 10px;
		margin-right: 10px;
	}

</style>
