import * as React from 'react';
import * as _ from 'lodash';
import './App.css';
import Form from './components/Form';
import Summary from './components/summary/Summary';

interface State {
	showSummary?: boolean;
	vehicleToEdit?: object
}

class App extends React.Component<any, State> {
	constructor(props: any) {
		super(props);
		this.state = {showSummary: false};
		this.buildVehicle = this.buildVehicle.bind(this);
		this.onFormClear = this.onFormClear.bind(this);
	}

	buildVehicle(vehicle: object) {
		this.setState({vehicleToEdit: vehicle, showSummary: true});
	}

	onFormClear() {
		this.setState({vehicleToEdit: {}, showSummary: false});
	}

	render() {
		return (
		  <div className="App">
		    <Form
		    	id={0} 
		    	buildVehicle={this.buildVehicle}
		    	onFormClear={this.onFormClear}
	    	/> 
		    {this.state.showSummary && !_.isNil(this.state.vehicleToEdit)? (
		    	<Summary vehicle={this.state.vehicleToEdit}/>
		    	):null}
		  </div>
		);
	}
}

export default App;
