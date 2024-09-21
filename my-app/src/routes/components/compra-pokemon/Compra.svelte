<script lang="ts">

    import ejemplo from '$lib/images/pokemon3.png';
    interface Poke {
        id: string | number;
        nombre: string;
        imagen: string;
        hp: string | number;
        attack: string | number;
        height: string | number;
        weight: string | number;
    }

    export let pokeSeleccionado: Poke = {
        nombre: '?',
        id: '?',
        imagen: '$lib/images/poke-question.png',
        hp: '?',
        attack: '?',
        height: '?',
        weight: '?'
    };
</script>

<div id="info-poke">
    <img src={pokeSeleccionado.imagen} alt="foto de {pokeSeleccionado.nombre}" height="230px">
    <div class="info-txt">
        <p><strong>Nombre: </strong>{pokeSeleccionado.nombre}</p>
        <p><strong>Peso: </strong>{pokeSeleccionado.weight} kg</p>
        <p><strong>Altura: </strong>{pokeSeleccionado.height} m</p>
        <p><strong>HP: </strong>{pokeSeleccionado.hp}</p>
        <p><strong>Attack: </strong>{pokeSeleccionado.attack}</p>
    </div>
    <div class="info-compra">
        <p> <strong>Precio: 1</strong>  </p>
        <button>Comprar</button>
    </div>
</div>

<style>
    #info-poke
    {
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
    
    .info-txt
    {
        width: 100%;
    }

    .info-compra
    {
        display: flex;
        gap: 30px;
    }

    button
    {
        padding: 10px;
		border-radius: 0.5rem;
		background-color: rgb(210, 42, 42);
		color: aliceblue;
    }

</style>
