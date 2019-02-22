import * as React from 'react';
import * as _ from 'lodash';
import data from '../../utils/data';
import './summary.css';

export interface Props {
	vehicle: any;
}

function Summary( {vehicle} : Props) {
	
	function getPrice(): number {
		let carData = data.vehicleConfig[vehicle.brand][vehicle.make];
		let price:number = carData.basePrice;
		
		//add in all the extras
		price += carData.driveTrainPrice[vehicle.drive];
		price += carData.trimPrice[vehicle.trim];
		price += carData.colorPrice[vehicle.color]? carData.colorPrice[vehicle.color] : 0; 
		return price;
	}

	return (
		<div className="summary">
			<div className="heading">Vehicle Summary</div>
			<div className="row">
				<strong>{`${vehicle.brand} - ${vehicle.make}`}</strong>
			</div>
			<div className="row">
				<label>Trim:</label> {vehicle.trim}
			</div>
			<div className="row">
				<label>Drivetrain:</label> {vehicle.drive}
			</div>
			<div className="row">
				<label>Color:</label> {data.vehicleConfig[vehicle.brand][vehicle.make].colorNames[vehicle.color]}
			</div>
			<div className="row">
		{/*Show the total price in super small font. This is a car dealer after all... */}
				<small><strong>Price: $ {data.formatMoney(getPrice())}</strong></small>
			</div>
		</div>
	)
}

export default Summary;