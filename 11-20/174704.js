// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	const A = Number(input[0].split(' ')[0]);
	const B = Number(input[0].split(' ')[1]);
	
	console.log((A+B).toFixed(6));
	process.exit();
})();
