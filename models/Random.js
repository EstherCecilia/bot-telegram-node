
const fs = require('fs');

class Random {
	constructor() {
		this.phrases = JSON.parse(fs.readFileSync('data/phrases.json'));
	}

	getRandomPhrase() {
		const randomIndex = Math.floor(Math.random() * this.phrases.length);
		const phrase = this.phrases[randomIndex];
		return `🌸 ${phrase.frase}. \n\n- ${phrase.autor}🌸`;
	}

	generateRandomPassword(length) {
		const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let password = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length);
			password += charset[randomIndex];
		}
		return password;
	}
}


module.exports = Random;