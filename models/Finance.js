class Finance {
	constructor(dataPerson){
		this.billets = dataPerson.billets;
	}
     

	getBillet() {
  
		let response = 'Lista de Boletos:\n';
		this.billets.forEach((billet) => {
			response += `[ ] ${billet.name}\n`;
		});
  
		return response;
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


module.exports = Finance;