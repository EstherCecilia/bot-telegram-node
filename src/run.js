const { Telegraf } = require('telegraf');
const processMessageService = require('./services/process-message-service');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;



const token = process.env.TELEGRAM_BOT_TOKEN;

// Verifica se o token está definido
if (!token) {
	console.error('O token do bot Telegram não está definido. Certifique-se de configurá-lo como uma variável de ambiente no Netlify.');
	process.exit(1);
}

// Crie uma instância do bot passando o token fornecido pelo BotFather
const bot = new Telegraf(token); 

// Middleware para responder a mensagens de texto
bot.on('text', async (ctx) => {
	const message = ctx.message.text;
	const response = await processMessageService(message);
	if (response) {
		ctx.reply(response);
	}
});

// Middleware para registrar todos os comandos "/start"
bot.start((ctx) => ctx.reply('Olá! Este é um bot pessoal, mandei um oi.'));

// Inicie o bot
bot.launch();

console.log('Bot está funcionando...');
