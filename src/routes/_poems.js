// Almost entirely adapted from:
// https://github.com/doppelganger9/blog/blob/master/src/routes/index.json.js

import fs from 'fs';
import path from 'path';
import markdown from '../helpers/markdown';

const POEMS_DIRECTORY = './src/poems';
const siteUrl = 'https://155-217-155.netlify.com';

export function getPoems() {
	const slugs = fs
		.readdirSync(POEMS_DIRECTORY)
		.filter(file => path.extname(file) === '.md')
		.map(file => file.slice(0, -3));

	return slugs
		.map(getPoem)
		.filter(poem => poem.meta.published)
		.sort((a, b) => {
			return a.meta.order - b.meta.order;
		});
}

export function getPoem(slug) {
	const file = `${POEMS_DIRECTORY}/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const rawContent = fs.readFileSync(file, 'utf-8');

	let html = markdown.render(rawContent);

	return {
		slug,
		html,
		rawContent,
		meta: markdown.meta
	};
}
