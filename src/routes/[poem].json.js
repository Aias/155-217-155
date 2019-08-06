import { getPoem } from './_poems.js';

export function get(req, res, next) {
	const { poem: slug } = req.params;

	let poem = getPoem(slug);

	if (typeof poem === 'object') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(poem));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(
			JSON.stringify({
				message: `Not found`
			})
		);
	}
}
