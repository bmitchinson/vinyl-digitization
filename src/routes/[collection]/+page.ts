import { vinylCollections } from '../../lib/pages-cms.js';

export async function load({ params }) {
	const correspondingCollection = vinylCollections.find(
		(collection) => collection.collectionRoute === params.collection
	);
	if (!correspondingCollection)
		throw Error("COLLECTION: You're trying to prerender a page with a misaligned route name");
	return {
		collectionItems: correspondingCollection.collectionItems,
		collectionName: correspondingCollection.collectionName,
		collectionRoute: correspondingCollection.collectionRoute
	};
}
