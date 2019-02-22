import * as React from 'react';
import * as _ from 'lodash';
import data from '../../utils/data';
import './style.css';

export interface Props {
	type: number,
	onTypeChange(type:number): void
}

function VehicleSelector({ type, onTypeChange } : Props) {
	return (
		<div className="vehicle-selector">
			{_.map(data.types, (vehicleType, index) => {
				return (
					<div className="vehicle-selector__option-wrap" key={vehicleType + '-vehicle'}>
						<div className="vehicle-selector__label">{vehicleType}</div>
						<div 
							className={`vehicle-selector__option ${type.toString() === index? 'vehicle-selector__option--selected': ''}`}
							onClick={()=> onTypeChange(parseInt(index))}
						></div>
					</div>
				);
			})}
		</div>
	)
}

export default VehicleSelector;