export function parseQuery (querystring) {
	// remove any preceding url and split
	querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');
	let params = {};
	let pair;
	let d = decodeURIComponent;
	// march and parse
	for (let i = querystring.length - 1; i >= 0; i--) {
		pair = querystring[i].split('=');
		params[d(pair[0])] = d(pair[1] || '');
	}

	return params;
}
