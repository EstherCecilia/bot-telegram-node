const fs = require('fs');

class Person {
	constructor(id) {
		const data = JSON.parse(fs.readFileSync('data/index.json'));
		this.person = data[id];
	}

	getCountBirthday() {
		const today = new Date();
		const birthday = new Date(this.person.birthday);

		birthday.setFullYear(today.getFullYear());
		const diff = birthday - today;

		return `Faltam ${Math.ceil(diff / (1000 * 60 * 60 * 24))} dias para o seu aniversário!`;
	}

	getPersonData() {
		return this.person;
	}
}


module.exports = Person;