const types = {
	0: 'Sedan',
	1: 'SUV',
	2: 'Truck'
};

const brands = {
	0: ['Chevrolet', 'Honda', 'Toyota', 'Lexus', 'Acura', 'Ford', 'Jaguar', 'BMW'],
	1: ['Chevrolet', 'Honda', 'Toyota', 'Lexus', 'Acura', 'Ford', 'Jaguar', 'BMW', 'GMC'],
	2: ['Chevrolet', 'Honda', 'Toyota', 'Ford', 'GMC']
};

const vehicleConfig = {
	'Chevrolet': {
		'Malibu':{
			name: 'Malibu',
			basePrice: 22555,
			type: 0,
			driveTrain: ['FWD'],
			driveTrainPrice: {
				'FWD': 0
			},
			trim: ['L', 'LS', 'LT', 'Hybrid', 'Premier'],
			trimPrice: {
				'L': 0,
				'LS': 1640,
				'LT': 3540,
				'Hybrid': 6240,
				'Premier': 9340
			},
			colors: ['C1C7CF', 'EEF6FC', '0B0B0B', '282D2D', 'BC9995', 'B80625'],
			colorNames: {
				'C1C7CF': 'Silver Ice Metalic',
				'EEF6FC': 'Summit White',
				'0B0B0B': 'Mosaic Black Metalic',
				'282D2D': 'Nightfall Gray Metallic',
				'BC9995': 'Sandy Ridge Metalic',
				'B80625' : 'Cajun Red'
			},
			colorPrice: {
				'B80625': 395
			}

		},
		'Cruz':{
			name: 'Cruz',
			basePrice: 17850,
			type: 0,
			driveTrain: ['FWD'],
			driveTrainPrice: {
				'FWD': 0
			},
			trim: ['L', 'LS', 'LT', 'Diesel'],
			trimPrice: {
				'L': 0,
				'LS': 1550,
				'LT': 3945,
				'Diesel': 8445
			},
			colors: ['C1C7CF', 'EEF6FC', 'FD5323', '282D2D', '9E9788', 'B80625'],
			colorNames: {
				'C1C7CF': 'Silver Ice Metalic',
				'EEF6FC': 'Summit White',
				'FD5323': 'Crush',
				'282D2D': 'Nightfall Gray Metallic',
				'9E9788': 'Pepperdust Metallic',
				'B80625' : 'Cajun Red'
			},
			colorPrice: {
				'B80625': 395,
				'FD5323' : 395
			}

		},
		'Corvette Stingray':{
			name: 'Corvette Stingray',
			basePrice: 56590,
			type: 0,
			driveTrain: ['RWD'],
			driveTrainPrice: {
				'RWD': 0
			},
			trim: ['1LT', '2LT', '1LT Z51', '2LT Z51', '3LT', '3LT Z51'],
			trimPrice: {
				'1LT': 0,
				'2LT': 4455,
				'1LT Z51': 5000,
				'2LT Z51': 9455,
				'3LT': 9745,
				'3LT Z51': 14745
			},
			colors: ['F9FEFD', 'D10100', '03306E', 'DDE7EE', 'FFE80F', 'FF6808'],
			colorNames: {
				'F9FEFD': 'Artic White',
				'D10100': 'Torch Red',
				'03306E': 'Admiral Blue Metallic',
				'DDE7EE': 'Blade Silver Metallic',
				'FFE80F': 'Corvette Racing Yellow',
				'FF6808' : 'Sebring Orange'
			},
			colorPrice: {
				'FFE80F': 995,
				'FF6808' : 996
			}

		},
		'Equinox':{
			name: 'Equinox',
			basePrice: 24575,
			type: 1,
			driveTrain: ['FWD', 'AWD'],
			driveTrainPrice: {
				'FWD': 0,
				'AWD': 3720
			},
			trim: ['L 1.5L Turbo', 'LS 1.5L Turbo', 'LT 1.5L Turbo', 'LT 2.0L Turbo', 'LT 1.6L Diesel', 'Premier 1.5L Turbo', 'Premier 1.6L Turbo Diesel', 'Premier 2.0L Turbo'],
			trimPrice: {
				'L 1.5L Turbo': 0,
				'LS 1.5L Turbo': 2020,
				'LT 1.5L Turbo': 3220,
				'LT 2.0L Turbo': 5720,
				'LT 1.6L Diesel': 7120,
				'Premier 1.5L Turbo': 7220,
				'Premier 1.6L Turbo Diesel': 10020
			},
			colors: ['33394A', '282D2D', 'C1C7CF', 'EEF6FC', '1C4432', 'F9851C'],
			colorNames: {
				'33394A' : 'Storm Blue Metallic',
				'282D2D': 'Nightfall Gray Metallic',
				'C1C7CF': 'Silver Ice Metallic',
				'EEF6FC': 'Summit White',
				'1C4432' : 'Ivy Metallic',
				'F9851C' : 'Orange Burst Metallic'

			},
			colorPrices: {
				'1C4432': 395,
				'F9851C' : 395
			}

		},
		'Traverse':{
			name: 'Traverse',
			basePrice: 30925,
			type: 1,
			driveTrain: ['FWD', 'AWD'],
			driveTrainPrice: {
				'FWD': 0,
				'AWD': 4670
			},
			trim: ['L', 'LS', 'LT Cloth', 'LT Leather', 'RS', 'Premier', 'High Country'],
			trimPrice: {
				'L': 0,
				'LS': 2670,
				'LT Cloth': 5170,
				'LT Leather': 11770,
				'RS': 12670,
				'Premier': 15070,
				'High Country': 22670
			},
			colors: ['EEF6FC', 'C1C7CF', '0B0B0B', '9E9788', 'B80625'],
			colorNames: {
				'EEF6FC': 'Summit White',
				'C1C7CF': 'Silver Ice Metalic',
				'0B0B0B': 'Mosaic Black Metalic',
				'9E9788': 'Pepperdust Metallic',
				'B80625' : 'Cajun Red'
			},
			colorPrices: {
				'B80625': 395
			}

		},
		'Silverado 1500':{
			name: 'Silverado 1500',
			basePrice: 37695,
			type: 2,
			driveTrain: ['4WD'],
			driveTrainPrice: {
				'4WD': 0
			},
			trim: ['WT', 'LS', 'Custom', 'LT', 'LT Z71', 'LTZ', 'LTZ Z71', 'High Country'],
			trimPrice: {
				'WT': 0,
				'LS': 5000,
				'Custom': 5100,
				'LT': 8400,
				'LT Z71': 10400,
				'LTZ': 12000,
				'LTZ Z71' : 13500,
				'High Country': 19400
			},
			colors: ['CD0404', 'C1C7CF', 'EEF6FC', 'B80625', '00577E'],
			colorNames: {
				'CD0404': 'Red Hot',
				'C1C7CF': 'Silver Ice Metalic',
				'EEF6FC': 'Summit White',
				'9E9788': 'Pepperdust Metallic',
				'B80625' : 'Cajun Red',
				'00577E' : 'Deep Ocean Blue Metallic'
			},
			colorPrices: {
				'B80625': 495,
				'00577E' : 395
			}

		}
	},
	'Jaguar': {

	},
	'GMC' : {

	}
}



function formatMoney(amount: any = 0, decimalCount = 2, decimal = ".", thousands = ",") : string {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number.parseFloat(i)).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
  	return amount;
  }
};


export default { types, brands, vehicleConfig, formatMoney };
