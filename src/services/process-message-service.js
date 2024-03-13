const {
	catWrds,
	dogWrds,
	motivation,
	homeMessage,
	daysInPortuguese,
	variantsHi,
	variantsBye,
	carConsumation,
	menu
} = require('../config/const');
const Person = require('../models/Person');
const Car = require('../models/Car');
const Finance = require('../models/Finance');
const Classroom = require('../models/Classroom');
const Random = require('../models/Random');
const extractNumber = require('../utils/extract-number');
const containsWord = require('../utils/contains-word');

const processMessageService = (message) => {
	const messsageLowerCase = message.toLowerCase();
	const person = new Person('123');
	const dataPerson = person.getPersonData();
	const car = new Car(dataPerson);
	const finance = new Finance(dataPerson);
	const classroom = new Classroom(dataPerson);
	const randomBot = new Random();

	if (messsageLowerCase.includes('menu')) {
		return menu;
	}
	if(catWrds.includes(messsageLowerCase)) {
		return randomBot.getCatImage();
	}
	if(dogWrds.includes(messsageLowerCase)) {
		return randomBot.getDogImage();
	}
	if (messsageLowerCase.includes('aula')) {
		return classroom.getClassroom(message);
	}

	if (containsWord(messsageLowerCase , ['senha'])) {
		return randomBot.generateRandomPassword(8);
	}

	if (containsWord(messsageLowerCase , ['carro'])) {
		return car.getInformation();
	}

	if (containsWord(messsageLowerCase, ['aniversário'])) {
		return person.getCountBirthday();
	}

	if(containsWord(messsageLowerCase, carConsumation)) {
		const distance = extractNumber(message);
		if(!distance) return 'Tente algo como: consumo de 100 KM';
		return car.calculateConsumption(distance);
	}

	if (messsageLowerCase.includes('boleto')) {
		return finance.getBillet();
	}

	if (motivation.includes(messsageLowerCase)) {
		return randomBot.getRandomPhrase();
	}

	if (messsageLowerCase.includes('tim')) {
		return finance.getDateExpireCredit(message);
	}

	if (Object.keys(daysInPortuguese).includes(messsageLowerCase)) {
		const valideDay = daysInPortuguese[messsageLowerCase];
		return classroom.getClassroom(message, valideDay);
	}
	if (['home', 'menu'].includes(messsageLowerCase)) {
		return homeMessage;
	}

	if (variantsHi.includes(messsageLowerCase)) {
		return homeMessage;
	}

	if (variantsBye.includes(messsageLowerCase)) {
		return 'Até mais!';
	}

	return 'Não entendi o que você quis dizer.';
};

module.exports = processMessageService;
