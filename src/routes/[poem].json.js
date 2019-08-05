import poems from './_poems.js';

const lookup = new Map();
poems.forEach(poem => {
	lookup.set(poem.id, JSON.stringify(poem));
});

export function get(req, res, next) {
	const { poem } = req.params;

	if (lookup.has(poem)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(poem));
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
