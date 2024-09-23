<script lang="ts">
    interface Poke {
        id: string | number;
        name: string;
        image: string;
        hp: string | number;
        attack: string | number;
        height: string | number;
        weight: string | number;
    }

    export let pokeSeleccionado: Poke = {
        name: '?',
        id: '?',
        image: '$lib/images/poke-question.png',
        hp: '?',
        attack: '?',
        height: '?',
        weight: '?'
    };
</script>

<div id="info-poke">
    <img src={pokeSeleccionado.image} alt="foto de {pokeSeleccionado.name}" height="230px">
    <div class="info-txt">
        <p><strong>Nombre: </strong>{pokeSeleccionado.name}</p>
        <p><strong>Peso: </strong>{pokeSeleccionado.weight} kg</p>
        <p><strong>Altura: </strong>{pokeSeleccionado.height} m</p>
        <p><strong>HP: </strong>{pokeSeleccionado.hp}</p>
        <p><strong>Attack: </strong>{pokeSeleccionado.attack}</p>
    </div>
</div>

<style>
    #info-poke {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 460px;
        box-shadow: 0px 3px 10px rgba(0.3, 0.3, 0.3, 0.3);
        border-radius: 2rem;
        padding: 30px;
        align-items: center;
        justify-content: center;
    }

    .info-txt {
        width: 100%;
    }
</style>
