
const fs = require('fs');

class Random {
	constructor() {
		this.phrases = JSON.parse(fs.readFileSync('src/data/phrases.json'));
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

	getCatImage(){
		const URL_CAT = 'https://api.thecatapi.com/v1/images/search';
		return fetch(URL_CAT).then(response => response.json()).then(cat => cat[0].url).catch(() => 'https://http.cat/404.jpg');			
	}

	getDogImage(){
		const URL_DOG = 'https://api.thedogapi.com/v1/images/search';
		return fetch(URL_DOG).then(response => response.json()).then(dog => dog[0].url).catch(() => 'https://http.dog/404.jpg');
	}
}


module.exports = Random;