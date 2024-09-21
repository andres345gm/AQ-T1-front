<script>
	import Header from './components/header-pokeon/Header-usuario.svelte';
	import Header_Inicio from './Header.svelte';
	import '../app.css';
    import { page } from '$app/stores';

	const rutasSinHeader = ['/', '/registro']; 
</script>

<div class="app">
	{#if !rutasSinHeader.includes($page.url.pathname)}
		<Header />
	{/if}

	{#if rutasSinHeader.includes($page.url.pathname)}
		<Header_Inicio />
	{/if}

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: white;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
