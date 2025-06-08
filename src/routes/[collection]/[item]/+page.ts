import { vinylCollections } from '../../../lib/pages-cms.js';

export async function load({ params }) {
	const item = vinylCollections
		.find((collection) => collection.collectionRoute === params.collection)
		?.collectionItems.find((item) => item.itemRoute === params.item);
	if (!item) throw Error("ITEM: You're trying to prerender a page with a misaligned route name");
	return {
		item
	};
}
