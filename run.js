const { Telegraf } = require('telegraf');
const Bot = require('./bot');
const { motivation, daysInPortuguese, variantsHi, variantsBye } = require('./const');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

function processMessage(message, botLogic) {
	const messsageLowerCase = message.toLowerCase();

	if (messsageLowerCase.includes('aula')) {
		return botLogic.getClassroom(message);
	} else if (messsageLowerCase.includes('boleto')) {
		return botLogic.getBillet(message);
	}else if (motivation.includes(messsageLowerCase)) {
		return botLogic.getRandomPhrase();
	}else if (messsageLowerCase.includes('tim')) {
		return botLogic.getDateExpireCredit(message);
	} else if (Object.keys(daysInPortuguese).includes(messsageLowerCase)) {
		const valideDay = daysInPortuguese[messsageLowerCase];
		return botLogic.getClassroom(message, valideDay);
	} else if (variantsHi.includes(messsageLowerCase)) {
		return `👋 Olá! Seja bem-vindo ao bot.\n \n
📚 Digite 'aula' para ver as aulas de hoje. \n
💳 Digite 'boleto' para ver a lista de boletos.\n
📅 Digite 'tim' para saber a data de vencimento da fatura do TIM.\n
🌸 Digite 'poesia' para ler uma poesia inspiradora.`;

	} else if (variantsBye.includes(messsageLowerCase)) {
		return 'Até mais!';
	} else {
		return 'Desculpe, não entendi sua mensagem.';
	}
}

// Crie uma instância do bot passando o token fornecido pelo BotFather
const bot = new Telegraf('KEY');
const botLogic = new Bot();

// Middleware para responder a mensagens de texto
bot.on('text', (ctx) => {
	const message = ctx.message.text;
	const response = processMessage(message, botLogic);
	if (response) {
		ctx.reply(response);
	}
});

// Middleware para registrar todos os comandos "/start"
bot.start((ctx) => ctx.reply('Olá! Este é um bot pessoal, mandei um oi.'));

// Inicie o bot
bot.launch();

console.log('Bot está funcionando...');
