import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
	  rollupOptions: {
		external: ['axios']  // Declara axios como una dependencia externa
	  }
	}
  });