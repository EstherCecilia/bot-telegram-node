const Car = require('../src/models/Car');

describe('Car', () => {
	let car;

	beforeAll(() => {
		// Mock car data
		const dataPerson = {
			car: {
				name: 'Toyota',
				model: 'Corolla',
				consumation: {
					city: {
						etanol: 6.2,
						gasoline: 9.4
					},
					highway: {
						etanol: 8.1,
						gasoline: 12.1
					}
				}
			}
		};
		car = new Car(dataPerson);
	});

	describe('getInformation', () => {
		it('should return car information', () => {
			const carInfo = car.getInformation();
			expect(carInfo).toContain('Toyota');
			expect(carInfo).toContain('Corolla');
			expect(carInfo).toContain('6.2 km/L (álcool)');
			expect(carInfo).toContain('9.4 km/L (gasolina)');
		});
	});

	describe('calculateAndReturnText', () => {
		it('should calculate and return the required fuel for given distance', () => {
			const actualText = car.calculateAndReturnText({
				distance: 100,
				alcoholConsumption: 6.2,
				gasolineConsumption: 9.4,
				type: 'cidade'
			});
			expect(actualText).toContain('100 km na cidade');
			expect(actualText).toContain('litros de álcool');
			expect(actualText).toContain('litros de gasolina');
		});
	});

	describe('calculateConsumption', () => {
		it('should calculate and return the fuel consumption for given distance', () => {
			const actualText = car.calculateConsumption(100);
			expect(actualText).toContain('100 km na cidade');
			expect(actualText).toContain('100 km na estrada');
			expect(actualText).toContain('litros de álcool');
			expect(actualText).toContain('litros de gasolina');
			expect(actualText).toContain('.........🚗');
		});
	});
});
