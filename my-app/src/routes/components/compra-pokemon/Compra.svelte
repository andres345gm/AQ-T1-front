<script lang="ts">
    import axios from 'axios';

    let errorMessage = '';

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

    // Función para determinar si el botón de compra debe estar habilitado
    function isButtonDisabled(): boolean {
        const user_balance = localStorage.getItem('user_balance');
        const balance = parseFloat(user_balance ?? '0');
        return balance === 0 || pokeSeleccionado.name === '?';
    }

    // Petición para realizar la compra
    function comprar() {
        const user_id = localStorage.getItem('user_id');
        const user_id_i = parseInt(user_id ?? '0');
        
        axios.post(`http://127.0.0.1:8000/user/${user_id_i}/purchase/${pokeSeleccionado.id}`)
        .then((response) => {
            // Mostrar mensaje de compra exitosa
            errorMessage = "Compra realizada con éxito";
            // Actualizar el balance del usuario
            localStorage.setItem('user_balance', response.data.balance);
        }).catch((error) => {
            console.log(error);
            // Mostrar error en realizar la compra
            errorMessage = "No se pudo realizar la compra";
        });
    }
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
    <div class="info-compra">
        <p><strong>Precio: 1</strong></p>
        <button on:click={comprar} >Comprar</button>
    </div>
    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
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

    .info-compra {
        display: flex;
        gap: 30px;
    }

    button {
        padding: 10px;
        border-radius: 0.5rem;
        background-color: rgb(210, 42, 42);
        color: aliceblue;
    }
</style>
