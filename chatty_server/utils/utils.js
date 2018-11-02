function generateRandomUserHandle(srcs = ['./utils/words/adjectives.txt', './utils/words/nouns.txt']) {
	const fs = require('fs');
	let handle = "";
	// loop through each source, select random line, capitalize the first letter, append to handle
	srcs.forEach(src => {
		const data = fs.readFileSync(src, 'utf-8');
			const lines = data.split('\n');
			const randomLine = lines[Math.floor(Math.random()*lines.length)];
			handle += randomLine[0].toUpperCase() + randomLine.substring(1)
		});
	return handle;
}

module.exports = {generateRandomUserHandle}; 