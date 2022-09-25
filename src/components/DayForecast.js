import React from 'react';
import './DayForecast.css';

function DayForecast(props) {
	console.log('initializing DayForecast Component');
	// return <div className="day-container">HELLO WORLD</div>;
	return (
		<div className="day-container">
			<label>{props.day}</label>
			<img src={props.icon_style} alt="weather"></img>
			<div className="temperature-container">
				<label className="temperature-high">{props.temp_high}&deg;</label>
				<label className="temperature-low">{props.temp_low}&deg;</label>
			</div>
		</div>
	);
}

export default DayForecast;

//#region
// class DayForecast extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		console.log('Day Forecast intializing - hello world');
// 		console.log(this.props);
// 	}

// 	render() {
// 		console.log(this.props);
// 		return (
// 			<div className="day-container">
// 				<label>{this.props.day}</label>
// 				<img src="http://openweathermap.org/img/wn/" {...this.props.icon} {...'@2x.png'}></img>
// 				<div className="temperature-container">
// 					<label className="temperature-high">{this.props.temp_high}&deg</label>
// 					<label className="temperature-low">{this.props.temp_low}&deg</label>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default DayForecast;
//#endregion
