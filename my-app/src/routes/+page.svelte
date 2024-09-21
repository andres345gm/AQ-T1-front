<script>
	import logo from '$lib/images/pokemon.svg';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { goto } from '$app/navigation'; // Importa la función `goto`

	function irAPagina() {
		goto('/user-pokes'); // Navega a la página /user-pokes
	}
</script>

<svelte:head>
	<title>Iniciar sesion</title>
	<meta name="description" content="Pokedex" />
</svelte:head>

<section>

	<div class="bienvenida">
		<picture class="pokemon">
			<source srcset={logo} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" width="90px"/>
		</picture>

		<h1 >
			Bienvenido a pokedex
		</h1>
	</div>
	

	<h2>
		<strong>Inicia Sesion</strong>
	</h2>

	<div class="div-ingreso">
		<div class="campo">
			<p>Nombre de usuario</p>
			<input type="text">
		</div>
		<div class="campo">
			<p>Contraseña</p>
			<input type="text">
		</div>
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
