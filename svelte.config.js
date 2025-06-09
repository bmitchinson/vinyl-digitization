import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { vinylCollections } from './src/lib/pages-cms.js';

const routes = vinylCollections
	.map(({ collectionRoute, collectionItems }) => {
		const collectionItemRoutes = collectionItems.map(
			(item) => `/${collectionRoute}/${item.itemRoute}`
		);
		return [...collectionItemRoutes, `/${collectionRoute}`];
	})
	.flat();

console.log('routes to prerender:', routes);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			entries: ['/', '/about', ...routes]
		}
	}
};

export default config;
