class Car {
	constructor(dataPerson){
		this.car = dataPerson.car;
	}

	getInformation() {
		return `🚗 Informações do carro 🚗
Nome: ${this.car.name}
Modelo: ${this.car.model}
Consumo: ${this.car.consumation.city.etanol} km/L (álcool) e ${this.car.consumation.city.gasoline} km/L (gasolina) na cidade.`;
	}

	calculateAndReturnText({distance, alcoholConsumption, gasolineConsumption, type}) {
		let alcoholLiters, gasolineLiters;
		
		alcoholLiters = distance / alcoholConsumption;
		gasolineLiters = distance / gasolineConsumption;

		return `Para percorrer ${distance} km na ${type}, você precisará de aproximadamente:
- ${alcoholLiters.toFixed(2)} litros de álcool.
- ${gasolineLiters.toFixed(2)} litros de gasolina. \n\n`;
	}

	calculateConsumption(distance) {
		const { consumation: { city, highway } } = this.car;
		const cityAlcoholConsumption = Number(city.etanol); // Km/L
		const cityGasolineConsumption =  Number(city.gasoline); // Km/L
		const highwayAlcoholConsumption = Number(highway.etanol); // Km/L
		const highwayGasolineConsumption = Number(highway.gasoline); // Km/L

		const responseCity = this.calculateAndReturnText({distance, alcoholConsumption: cityAlcoholConsumption, gasolineConsumption: cityGasolineConsumption, type: 'cidade'});
		const responseHighway =  this.calculateAndReturnText({distance, alcoholConsumption: highwayAlcoholConsumption, gasolineConsumption: highwayGasolineConsumption, type: 'estrada'});

		return responseCity + responseHighway + '.........🚗';
	}

    
}

module.exports = Car;