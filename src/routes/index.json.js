import { getPoems } from './_poems.js';

const poems = JSON.stringify(getPoems());

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(poems);
}
