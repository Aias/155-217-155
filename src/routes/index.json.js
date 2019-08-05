import poems from './_poems.js';

const contents = JSON.stringify(poems);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
