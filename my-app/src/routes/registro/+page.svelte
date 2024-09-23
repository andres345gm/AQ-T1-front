<script>
	import logo from '$lib/images/pokemon.svg';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { goto } from '$app/navigation'; // Importa la función `goto`
	import axios from 'axios';

	let username = '';
	let password = '';
	let repeatPassword = '';
	let errorMessage = '';


	
	function irAPagina() {
		// Evaluar si los campos están llenos
		if (!username || !password || !repeatPassword) {
			errorMessage = 'Por favor, completa todos los campos';
			return;
		}

		// Evaluar si las contraseñas son iguales
		if (password !== repeatPassword) {
			errorMessage = 'Las contraseñas no coinciden';
			return;
		}

		// Si todo es correcto, navegar a la página
		//enviar los datos al back 
		axios.post('http://127.0.0.1:8000/user', {
			user: username,
			password: password
		}).then((response) => {
			//guardar el id del usuario en local storage
			localStorage.setItem('user_id', response.data.id);
			localStorage.setItem('user_balance', response.data.balance);
			console.log(response);
			goto('/user-pokes');
		}).catch((error) => {
			console.log(error);
		});
	}
</script>

<svelte:head>
	<title>Registro</title>
	<meta name="Registro" content="Registro" />
</svelte:head>

<section>
	<div class="bienvenida">
		<picture class="pokemon">
			<source srcset={logo} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" width="90px" />
		</picture>

		<h1>Registrate en pokedex</h1>
	</div>

	<h2><strong>Empieza a conocer y comprar pokemones</strong></h2>

	<div class="div-ingreso">
		<div class="campo">
			<p>Nombre de usuario</p>
			<input type="text" bind:value={username}>
		</div>
		<div class="campo">
			<p>Contraseña</p>
			<input type="password" bind:value={password}>
		</div>
		<div class="campo">
			<p>Repite tu contraseña</p>
			<input type="password" bind:value={repeatPassword}>
		</div>
		{#if errorMessage}
			<p style="color: red;">{errorMessage}</p>
		{/if}
		<button class="boton" on:click={irAPagina}>Acceder</button>
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

	h1 {
		width: 100%;
	}

	.pokemon
	{
		padding: 10px;
		padding-right: 40px;
	}

	.campo
	{
		width: 100%;
	}

	.bienvenida
	{
		display: flex;
	}

	input
	{
		width: 100%;
		height: 30px;
		border: 0.5px black solid;
		border-radius: 0.5rem;
	}

	.div-ingreso {
		padding: 60px;
		width: 400px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		background-color: rgb(251, 248, 248);
		display: flex;
		flex-direction: column;
		border-radius: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	.boton
	{
		margin-top: 30px;
		width: 100px;
		padding: 10px;
		border-radius: 0.5rem;
		background-color: rgb(210, 42, 42);
		color: aliceblue;
	}

</style>
