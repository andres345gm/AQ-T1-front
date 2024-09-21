<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import dinero from '$lib/images/dinero-icon.png';
</script>

<header>
	<div class="corner1">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/user-pokes' ? 'page' : undefined}>
				<a href="/user-pokes">Mios</a>
			</li>
			<li aria-current={$page.url.pathname === '/compra' ? 'page' : undefined}>
				<a href="/compra">Comprar</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner2">
		<a href="/">
			Salir
		</a>
		<div class="dinero-div">
			<img src={dinero} alt="logoprecio" width="40px" height="40px">
			<p>Mi dinero: 5</p>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner1 {
		width: 3em;
		height: 3em;
	}

	.corner1 a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner2 {
		width: 11em;
		height: 3em;
	}

	.corner2 a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner1 img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.dinero-div
	{
		align-items: center;
		display: flex;
		gap: 10px;
		border: 0.5px black solid;
		border-radius: 1.5rem;
		padding: 10px;
		margin-right: 10px;
	}
</style>
