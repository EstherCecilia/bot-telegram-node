const daysInPortuguese = {
	segunda: 'Monday',
	terça: 'Tuesday',
	quarta: 'Wednesday',
	quinta: 'Thursday',
};
const carConsumation = ['consumo', 'combustível', 'gasto', 'gasolina', 'álcool', 'etanol', 'cidade', 'estrada'];
const variantsHi = ['oi', 'olá', 'eae', 'fala', 'opa', 'oi bot'];
const variantsBye = ['tchau', 'adeus', 'até mais', 'até logo', 'flw', 'xau', 'bye'];
const motivation = ['frase', 'motivação', 'citação', 'poesia'];
const homeMessage = `👋 Olá! Seja bem-vindo ao bot.\n \n
📚 Digite 'aula' para ver as aulas de hoje. \n
💳 Digite 'boleto' para ver a lista de boletos.\n
📅 Digite 'tim' para saber a data de vencimento da fatura do TIM.\n
🌸 Digite 'poesia' para ler uma poesia inspiradora.\n
🚗 Digite 'carro' para ver informações sobre o carro.\n
🚗 Digite 'consumo' para calcular o consumo de combustível.\n
🎂 Digite 'aniversário' para saber quantos dias faltam para o seu aniversário.\n
👋 Para se despedir, digite 'tchau'.\n`;

module.exports = {
	daysInPortuguese,
	variantsHi,
	homeMessage,
	variantsBye,
	motivation,
	carConsumation
};