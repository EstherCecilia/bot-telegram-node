const Bot = require('../bot');

describe('Bot', () => {
	let bot;

	beforeEach(() => {
		bot = new Bot();
	});

	it('should return a random phrase', () => {
		const phrase = bot.getRandomPhrase();
		expect(phrase).toBeDefined();
	});

	it('should return today\'s classroom', () => {
		const message = 'aula hoje';
		const classroom = bot.getClassroom(message);
		expect(classroom).toBeDefined();
	});

	it('should return the list of billets', () => {
		const message = 'boleto';
		const billets = bot.getBillet(message);
		expect(billets).toBeDefined();
	});

	it('should return the date of TIM credit expiration', () => {
		const message = 'tim';
		const date = bot.getDateExpireCredit(message);
		expect(date).toBeDefined();
	});
});
