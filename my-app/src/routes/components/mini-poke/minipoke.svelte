<script>
    export let poke;
</script>

<button class="div-mini" id={poke.id} on:click>
    <img src={poke.image} alt="Imagen de {poke.name}" height="60px">
    <p>{poke.name}</p>
</button>

<style>
    .div-mini {
        height: 110px;
        width: 110px;
        padding: 20px;
        box-shadow: 0px 3px 10px rgba(0.3, 0.3, 0.3, 0.3);
        border-radius: 1.5rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer; /* Cambia el cursor cuando pases el mouse */
        border: none; /* Elimina el borde predeterminado del botón */
        outline: none; /* Elimina el contorno */
    }

    p {
    font-size: 10px; /* Ajusta el tamaño del texto aquí */
    }

</style>
