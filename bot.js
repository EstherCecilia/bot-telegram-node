
const fs = require('fs');

class Bot {
	constructor() {
		// Carrega os dados do arquivo JSON
		this.classroomData = JSON.parse(fs.readFileSync('classrom.json'));
		this.phrases = JSON.parse(fs.readFileSync('phrases.json'));
	}

	getRandomPhrase() {
		const randomIndex = Math.floor(Math.random() * this.phrases.length);
		const phrase = this.phrases[randomIndex];
		return `🌸 ${phrase.frase}. 🌸\n${phrase.autor}`;
	}
  
	getClassroom(message, valideDay) {
		const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
		if (message.toLowerCase().includes('aula hoje') || valideDay) {
			const dayData = valideDay
				? this.classroomData[valideDay]
				: this.classroomData[today];
  
			if (dayData || valideDay) {
				const day = dayData.day;
				const classes = dayData.classrom.map((classroom) => {
					return `${classroom.name} (${classroom.teacher}) - Sala ${classroom.hour}`;
				});
				return `Aulas de hoje (${day}):\n${classes.join('\n')}`;
			} else {
				return 'Hoje não há aulas.';
			}
		} else if (message.toLowerCase().includes('aula')) {
			return 'Qual é o dia da semana da aula?';
		}
	}
  
	getBillet(message) {
		if (message.toLowerCase().includes('boleto')) {
			const billets = [
				{ name: 'Garagem', checked: false },
				{ name: 'Carro', checked: false },
				{ name: 'Seguro Carro', checked: false },
				{ name: 'Auxilio casa', checked: false },
				{ name: 'Pernanbucanas', checked: false },
				{ name: 'Inter', checked: false },
				{ name: 'Nubank', checked: false },
			];
  
			let response = 'Lista de Boletos:\n';
			billets.forEach((billet) => {
				response += `[ ] ${billet.name}\n`;
			});
  
			return response;
		}
	}
  
	getDateExpireCredit(message) {
		if (message.toLowerCase().includes('tim')) {
			const currentDate = new Date();
			const targetDate = new Date('2024-04-14'); // Data 45 dias depois de 29/02/2024
  
			const diffInDays = Math.ceil(
				(targetDate - currentDate) / (1000 * 60 * 60 * 24)
			);
			if (diffInDays <= 0) {
				return 'Hoje é o dia de pagar sua fatura do TIM!';
			} else {
				return `Faltam ${diffInDays} dias para o vencimento da fatura do TIM.`;
			}
		}
	}
}


module.exports = Bot;