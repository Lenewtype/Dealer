import * as React from 'react';
import * as _ from 'lodash';
import data from '../utils/data';
import './form.css';
import VehicleSelector from './vehicleSelector/VehicleSelector';
import ColorSelector from './colorSelector/ColorSelector';

interface State {
	brand: string;
	make: string;
	type: number;
	trim: string;
	id: number;
	name: string;
	drive: string;
	color: string;

}

export interface Props {
	id: number;
	vehicle?: object;
	buildVehicle(vehicle: object) : void;
	onFormClear():void
}

class Form extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { type: 0, brand: '', make: '', trim: '', drive: '', id: props.id, name: '', color: ''};
		this.onTypeChange = this.onTypeChange.bind(this);
		this.onBrandChange = this.onBrandChange.bind(this);
		this.onMakeChange = this.onMakeChange.bind(this);
		this.onTrimChange = this.onTrimChange.bind(this);
		this.onDriveChange = this.onDriveChange.bind(this);
		this.onColorChange = this.onColorChange.bind(this);
		this.buildVehicle = this.buildVehicle.bind(this);
		this.onFormClear = this.onFormClear.bind(this);
	}

	onTypeChange(value: number): void {
		this.setState({type: value, brand: '', make: '', trim: '', drive: '', color: ''});
	}

	onBrandChange(evt: any): void {
		let value = evt.target.value;
		this.setState({brand: value, make: '', trim: '', drive: '', color: ''});
	}

	onMakeChange(evt: any): void {
		let value = evt.target.value;
		this.setState({make: value, trim: '', drive: '', color: ''});
	}

	onTrimChange(evt: any): void {
		let value = evt.target.value;
		this.setState({trim: value});
	}

	onDriveChange(evt: any): void {
		let value = evt.target.value;
		this.setState({drive: value});
	}

	onColorChange(value:string): void {
		this.setState({color: value});
	}

	showSaveButton():boolean {
		let vehicle = this.state;

		//make sure the whole form is filled out to show the build button
		if(_.isEmpty(vehicle.make) || _.isEmpty(vehicle.brand) || _.isEmpty(vehicle.trim) || _.isEmpty(vehicle.drive) || _.isEmpty(vehicle.color)) {
			return false;
		}
		

		return true;
	}

	buildVehicle(): void {
		this.props.buildVehicle(_.clone(this.state));
	}

	onFormClear(): void {
		this.setState({type: 0, brand: '', make: '', trim: '', drive: '', id: this.props.id, name: '', color: ''}, ()=> {
			this.props.onFormClear();
		})
	}

	render() {
		let vehicleConfig = _.get(data.vehicleConfig, `${this.state.brand}.${this.state.make}`, null);
		return (<div className="form">
			<div>
				<div className="row">
					<label className="heading">Choose a Vehicle Type</label>
					<VehicleSelector type={this.state.type} onTypeChange={this.onTypeChange}/>
				</div>
				<div className="row">
					<label className="heading">Select the Brand</label>
					<select value={this.state.brand} onChange={this.onBrandChange}>
						<option value="">Select an Option</option>
						{_.map(data.brands[this.state.type], (brand, index) => {
							return(
								<option value={brand} key={'brand'+index}>{brand}</option>
							)
						})}
					</select>
				</div>
				<div className="row">
					<label className="heading">Select the Make</label>
					<select value={this.state.make} onChange={this.onMakeChange}>
						<option value="">Select an Option</option>
						{_.map(data.vehicleConfig[this.state.brand], (make, index) => {
							if(make.type !== this.state.type) {
								return null;
							}
							return(
								<option value={make.name} key={'make'+index}>{make.name}</option>
							)
						})}
					</select>
				</div>
				<div className="row">
					<label className="heading">Select a Trim Level</label>
					<select value={this.state.trim} onChange={this.onTrimChange}>
						<option value="">Select an Option</option>
						{_.map(_.get(vehicleConfig, `trim`, []), (trim, index) => {
							return(
								<option value={trim} key={'trim'+index}>{trim}</option>
							)
						})}
					</select>
				</div>
				<div className="row">
					<label className="heading">Choose the Drivertrain</label>
					<select value={this.state.drive} onChange={this.onDriveChange}>
						<option value="">Select an Option</option>
						{_.map(_.get(vehicleConfig, `driveTrain`, []), (driveTrain, index) => {
							return(
								<option value={driveTrain} key={'driveTrain'+index}>{driveTrain}</option>
							)
						})}
					</select>
				</div>
				<div className="row">
					<label className="heading">Select a Paint Color</label>
					<ColorSelector
						selectedColor={this.state.color}
						colors={_.get(vehicleConfig, 'colors', [])}
						colorNames={_.get(vehicleConfig, 'colorNames', [])}
						onColorChange={this.onColorChange}
					/>
				</div>
				<div className="row">
					{this.showSaveButton()? (
						<>
							<button onClick={this.buildVehicle}>Build</button>
							<button onClick={()=> this.onFormClear()}>Clear </button>
						</>
					) : null}
				</div>
			</div>
		</div>);
	}
}

export default Form;