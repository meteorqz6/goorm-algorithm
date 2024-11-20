// Run by Node.js
const readline = require('readline');

(async () => {
	const rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}

  const N = Number(input[0]); 
  let S = input[1].split('').map(String);
	
	for(let i = 0; i < S.length; i++) {
		if(S[i] === S[i].toLowerCase()) {
			S[i] = S[i].toUpperCase();
		} else {
			S[i] = S[i].toLowerCase();
		}
	}

  console.log(S.join(''));
	process.exit();
})();

