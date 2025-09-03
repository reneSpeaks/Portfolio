import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
			'@assets': '/src/assets',
			'@context': '/src/context',
			'@config': '/src/config',
			'@pages': '/src/pages'
		}
	}
});
