import { edCollectionOne } from '../../../lib/pages-cms.js';

export async function load({ params }) {
	return {
		vinylGround: edCollectionOne.find((item) => item.route === params.recordName)
	};
}
