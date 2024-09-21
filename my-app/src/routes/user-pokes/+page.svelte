<script lang="ts">
    import logo from '$lib/images/pokemon2.png';
    import welcome_fallback from '$lib/images/svelte-welcome.png';
    import pokeQuestion from '$lib/images/poke-question.png'; // Imagen de interrogante
    import Info_poke from '../components/info-pokemon/Info_poke.svelte';
    import MiniPoke from '../components/mini-poke/minipoke.svelte';

    // Generar lista de 30 pokes con valores adicionales
    let miniPokes = [];
    for (let i = 1; i <= 30; i++) {
        miniPokes.push({
            id: i,
            nombre: `Pokemon ${i}`,
            imagen: logo, // Usamos la imagen logo para todos
            hp: Math.floor(Math.random() * 100) + 1, // Valores aleatorios para ilustrar
            attack: Math.floor(Math.random() * 100) + 1,
            height: (Math.random() * 2).toFixed(2), // Altura aleatoria entre 0 y 2 metros
            weight: (Math.random() * 100).toFixed(2) // Peso aleatorio
        });
    }

	interface Poke {
        id: string | number;
        nombre: string;
        imagen: string;
        hp: string | number;
        attack: string | number;
        height: string | number;
        weight: string | number;
    }

    // Poke seleccionado (inicialmente con valores por defecto)
    let pokeSeleccionado: Poke = {
        id: '?',
        nombre: '?',
        imagen: pokeQuestion,
        hp: '?',
        attack: '?',
        height: '?',
        weight: '?'
    };

    // Función para seleccionar un mini poke
    function seleccionarPoke(poke: Poke) {
        pokeSeleccionado = poke;
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
