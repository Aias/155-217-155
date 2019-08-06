import Remarkable from 'remarkable';
import meta from 'remarkable-meta';

let markdown = new Remarkable({
	typographer: true,
	breaks: true
}).use(meta);

export default markdown;
